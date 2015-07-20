//Define Global variables
console.log("This is linked!");


var playerWin;
var balance = 1000;
var id = [];
var betAmount;
var userHand = [];
var compHand = [];
var userShuffled = [];
var compShuffled = [];

var value = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
var img = ["PNG-cards-1.3/2_of_clubs.png",
    "PNG-cards-1.3/2_of_diamonds.png",
    "PNG-cards-1.3/2_of_hearts.png",
    "PNG-cards-1.3/2_of_spades.png",
    "PNG-cards-1.3/3_of_clubs.png",
    "PNG-cards-1.3/3_of_diamonds.png",
    "PNG-cards-1.3/3_of_hearts.png",
    "PNG-cards-1.3/3_of_spades.png",
    "PNG-cards-1.3/4_of_clubs.png",
    "PNG-cards-1.3/4_of_hearts.png",
    "PNG-cards-1.3/4_of_diamonds.png",
    "PNG-cards-1.3/4_of_spades.png",
    "PNG-cards-1.3/5_of_clubs.png",
    "PNG-cards-1.3/5_of_diamonds.png",
    "PNG-cards-1.3/5_of_hearts.png",
    "PNG-cards-1.3/5_of_spades.png",
    "PNG-cards-1.3/6_of_clubs.png",
    "PNG-cards-1.3/6_of_diamonds.png",
    "PNG-cards-1.3/6_of_hearts.png",
    "PNG-cards-1.3/6_of_spades.png",
    "PNG-cards-1.3/7_of_clubs.png",
    "PNG-cards-1.3/7_of_diamonds.png",
    "PNG-cards-1.3/7_of_hearts.png",
    "PNG-cards-1.3/7_of_spades.png",
    "PNG-cards-1.3/8_of_clubs.png",
    "PNG-cards-1.3/8_of_diamonds.png",
    "PNG-cards-1.3/8_of_hearts.png",
    "PNG-cards-1.3/8_of_spades.png",
    "PNG-cards-1.3/9_of_clubs.png",
    "PNG-cards-1.3/9_of_diamonds.png",
    "PNG-cards-1.3/9_of_hearts.png",
    "PNG-cards-1.3/9_of_spades.png",
    "PNG-cards-1.3/10_of_clubs.png",
    "PNG-cards-1.3/10_of_diamonds.png",
    "PNG-cards-1.3/10_of_hearts.png",
    "PNG-cards-1.3/10_of_spades.png",
    "PNG-cards-1.3/ace_of_clubs.png",
    "PNG-cards-1.3/ace_of_diamonds.png",
    "PNG-cards-1.3/ace_of_hearts.png",
    "PNG-cards-1.3/ace_of_spades.png",
    "PNG-cards-1.3/jack_of_clubs.png",
    "PNG-cards-1.3/jack_of_diamonds.png",
    "PNG-cards-1.3/jack_of_hearts.png",
    "PNG-cards-1.3/jack_of_spades.png",
    "PNG-cards-1.3/king_of_clubs.png",
    "PNG-cards-1.3/king_of_hearts.png",
    "PNG-cards-1.3/king_of_diamonds.png",
    "PNG-cards-1.3/king_of_spades.png",
    "PNG-cards-1.3/queen_of_clubs.png",
    "PNG-cards-1.3/queen_of_diamonds.png",
    "PNG-cards-1.3/queen_of_hearts.png",
    "PNG-cards-1.3/queen_of_spades.png",
];

//Create array of cards the different cards you have.  It is an array of objects for each card.
//Used forloop to push it into this array

var cards = [];



$('#betButton').on('click', function() {
    console.log("is bet button working?")
    var userInput = grabInput();
    // debugger;
});


//Function to grab input for amount of deal Bet.  Called back in event listener
var grabInput = function grabInput() {
        var input = $('#bet').val();
        if (parseInt(input) > 1000) {
            alert("you don't have that much monies")
        } else {
            $('#betamount').append("$" + input);
            return input
        }

    }
    //Create a card Constructor that creates 52 unique cards

var Card = function Card(value, img, id) {
    this.value = value;
    this.img = img;
    this.id = id;
    // this.getNumber = function() {
    //     return number;
    // };

}


//loop that creates each instance of Question objects
//Pushes each object in an array called cards

for (var i = 0; i < value.length; i++) {
    var cardObject = new Card(value[i], img[i], i);
    cards.push(cardObject);
}


var $balanceField = $('#bankBalance').append("$" + balance);

//declare deal function.  Loops through and shuffles Deck
//Pushes into separate shuffled pile
var deal = function deal() {

    for (var i = 0; i < cards.length; i++) {
        var shuffledDeck = cards[Math.floor(Math.random() * cards.length)];
        userShuffled.push(shuffledDeck);
        compShuffled.push(shuffledDeck);
    }

//Declaring variables to add up card value amount
    console.log(shuffledDeck)
    var $playerHandDiv = $('#playerHand')
    var initialTotal = userShuffled[18].value + userShuffled[2].value;
    var secondTotal = initialTotal + userShuffled[20].value
    var thirdTotal = secondTotal + userShuffled[4].value

    // var acevalue = function acevalue(){

    // 		if (userShuffled[18].value ===11){
    // 			userShuffled[18].value =1
    // 		} else if (userShuffled[20].value === 11){
    // 			userShuffled[20].value=1
    // 		} else if (userShuffled[4].value===11){
    // 			userShuffled[4].value=1
    // 		}

    // }

    var wins = 0;
    var losses = 0;
    var tie = 0;
    var playerWin;
    //Append new amount of bankroll balance based on outcome of Hand
    var bankRollDifference = function bankRollDifference() {
        console.log("is the bankroll balance running?")
        var $betInput = parseInt($('#bet').val());
        var difference = balance - $betInput;
        var addition = balance + $betInput;
        if (playerWin === true) {
        	
            $balanceField = $('#bankBalance').append("$" + addition);

        } else if (playerWin === false) {
            $balanceField = $('#bankBalance').append("$" + difference);
        }

    }
//Game Logic for Dealing of Cards
//If amount gets bigger than 21.  JS Alert for busted!
    if (userHand.length === 0) {
        var $playerHandImgOne = $('<img id="imgBoxOne">').appendTo($playerHandDiv);
        var $playerHandImgTwo = $('<img id="imgBoxTwo">').appendTo($playerHandDiv);
        $playerHandImgOne.attr("src", userShuffled[18].img);
        userHand.push(userShuffled[18].img)
        $playerHandImgTwo.attr("src", userShuffled[2].img);
        userHand.push(userShuffled[2].img)
        console.log("is this pushing?")
        if (initialTotal > 21) {
            alert("You Busted")
            playerWin = false;
            losses++
        }


    } else if (userHand.length === 2 && initialTotal <= 21) {
        var $playerHandImgThree = $('<img id="imgBoxThree">').appendTo($playerHandDiv);
        $playerHandImgThree.attr("src", userShuffled[20].img);
        userHand.push(userShuffled[20].img)
        if (secondTotal > 21) {
            // acevalue()
            alert("You Busted");
            losses++
            console.log(losses);
            playerWin = false;

        }
    } else if (userHand.length >= 3 && secondTotal <= 21) {
        var $playerHandImgFour = $("<img id='imgBoxFour'>").appendTo($playerHandDiv);
        $playerHandImgFour.attr("src", userShuffled[4].img);
        userHand.push(userShuffled[4].img)
        if (thirdTotal > 21) {
            console.log("you busted!");
            console.log(losses);
            alert("You busted!");
            losses++
            console.log(losses)
            playerWin = false;

        }
    } else if (userHand.length === 4 && thirdTotal < 21) {
        var $playerHandImgFive = $("<img id='imgBoxFive'>").appendTo($playerHandDiv);
        $playerHandImgFive.attr("src", userShuffled[50].img);
        userHand.push(userShuffled[4].img);
    }
    bankRollDifference();
//Event listener for Stand Logic after Player is done Hitting
    $('#Stand').on('click', function() {

        console.log("is dealer firing?");
        var initialDealerTotal = compShuffled[22].value + compShuffled[24].value
        var secondDealerTotal = compShuffled[1].value + initialDealerTotal;
        var thirdDealerTotal = compShuffled[9].value + secondDealerTotal;

        //function to compare value of dealer hands and user hands.  Return true or false for Playerwin
        //Also adds to the win or loss count for the player
        var compareHand = function compareHand() {
            if (secondDealerTotal > secondTotal && secondDealerTotal > thirdTotal && secondDealerTotal < 21) {
                alert("Dealer Wins!");
                console.log("HELLO")
                losses++
                console.log(losses);
                playerWin = false;
            } else if (initialTotal > secondDealerTotal && initialTotal > thirdDealerTotal) {
                alert("Player Wins");
                wins++
                console.log(wins)
                playerWin = true;
            } else if (initialTotal > initialDealerTotal && initialTotal > secondDealerTotal) {
                alert("Player Wins");
                wins++
                console.log(wins)
                playerWin = true;
            } else if (secondTotal > secondDealerTotal) {
                alert("Player Wins")
                wins++
                console.log(wins)
                playerWin = true;
            } else if (thirdDealerTotal > 21) {
                alert("Player Wins")
                wins++
                console.log(wins)
                playerWin = true;
            } else if (thirdDealerTotal < 21 && thirdDealerTotal > thirdTotal) {
                alert("Dealer Wins")
                losses++
                console.log(losses)
                playerWin = false;
            } else if (initialTotal === secondDealerTotal) {
                alert("It's a Tie!")
                tie++
                console.log(tie);
            } else if (secondTotal === secondDealerTotal) {
                alert("It's a Tie!")
                tie++
                console.log(tie);
            } else if (secondDealerTotal > initialTotal) {
                alert("Dealer Wins")
                losses++
                console.log(losses);
            } else if (thirdTotal === secondTotal) {
                alert("It's a tie!")
                tie++
                console.log(tie);
            } else if (initialTotal < initialDealerTotal) {
                alert("Dealer Wins!")
                losses++
                console.log(losses);
            } else if (initialTotal < initialDealerTotal) {
                alert("Dealer Wins!")
                losses++
                console.log(losses);
            } else if (secondTotal === initialDealerTotal) {
                alert("It's a tie!")
                tie++
                console.log(tie);
            }

            bankRollDifference();
        }
        //Dealer Hand Logic for Dealing of Cards.  Will Get Dealt Until it is 17 At least
        if (compHand.length === 0) {
            var $computerHandDiv = $('#compHand')
            var $computerHandImgOne = $('<img>').appendTo($computerHandDiv);
            var $computerHandImgTwo = $('<img>').appendTo($computerHandDiv);
            $computerHandImgOne.attr("src", compShuffled[22].img);
            compHand.push(compShuffled[22].img)
            $computerHandImgTwo.attr("src", compShuffled[24].img);
            compHand.push(compShuffled[24].img)
            if (compHand.length === 2 && initialDealerTotal < 17) {
                var $computerHandImgThree = $('<img>').appendTo($computerHandDiv);
                $computerHandImgThree.attr("src", compShuffled[1].img);
                compHand.push(compShuffled[1].img);
                if (secondDealerTotal > 21) {
                    alert("You won! the Dealer Lost!")
                    playerWin = true;
                }
            }
            if (compHand.length === 3 && secondDealerTotal < 17) {
                var $computerHandImgFour = $('<img>').appendTo($computerHandDiv);
                $computerHandImgFour.attr("src", compShuffled[9].img);
                compHand.push(compShuffled[9].img);
            }
            console.log("where am i")
            compareHand();
        }
        $('#new').on('click',function(){
        	var userShuffled=[];
        	var compShuffled=[];
        })


        //Reloads Page when user hits new Hand
        $('#restart').on('click',function(){
        	location.reload()	
        })

    })



}













console.log("hello cat");
$('#hit').click(deal);
