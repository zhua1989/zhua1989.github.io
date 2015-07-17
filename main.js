//Define Global variables
console.log("This is linked!");


var wins;
var lossse;
var balance = 1000;
var id = [];
var betAmount;
var userHand = [];
var compHand = [];


var value = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
var img = ["/PNG-cards-1.3/2_of_clubs.png",
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
        $('#betamount').append("$" + input);
        return input
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

var shuffle = function shuffle() {
    for (var i = 0; i < cards.length; i++) {
        var shuffledDeck = cards[Math.floor(Math.random() * cards.length)];
        userHand.push(shuffledDeck);
		userHand.push(shuffledDeck);
		console.log(shuffledDeck);
    }
    console.log(shuffledDeck)
var $playerHandDiv = $('#playerHand')
var $playerHandImgOne = $('<img>').appendTo($playerHandDiv);
var $playerHandImgTwo = $('<img>').appendTo($playerHandDiv);
// userHand.push(shuffledDeck);
// userHand.push(shuffledDeck);
$playerHandImgOne.attr("src", userHand[0].img);
$playerHandImgTwo.attr("src", userHand[9].img);
}






//Deck Constructor to expects an array of card objects
//Additionally will shuffle the deck to deal from



//Event Listener for the hit Button


console.log("hello dog");
var theLength = cards.length - 1;
var toSwap;
var tempCard;
console.log("this is firing");

// function shuffle() {
//     // console.log("Cards before shuffle:" + cards);
//     for (i = theLength; i > 0; i--) {
//         toSwap = Math.floor(Math.random() * i);
//         tempCard = cards[i];
//         cards[i] = cards[toSwap];
//         cards[toSwap] = tempCard;
//     }
//     	var $playerHandDiv = $('#playerHand')
//         var $playerHandImgOne = $('<img>').appendTo($playerHandDiv);
//         var $playerHandImgTwo = $('<img>').appendTo($playerHandDiv);
//         userHand.push(cards[toSwap]);
//         userHand.push(cards[toswap]);
//         $playerHandImgOne.attr("src", userHand[0].img);
//         $playerHandImgTwo.attr("src", userHand[1].img);


//         // var $compHandDiv = $('#compHand')
//         // var $compHandImg = $('<img>').appendTo($compHandDiv);
//         // compHand.push(cards[toSwap]);
//         // $compHandImg.attr("src", userHand[0].img);

//     return cards[i];
//     // console.log("Cards after shuffle: " + cards);
//     console.log("is this working now?");

// }

// var displayCards = function displayCards(){



// }

console.log("hello cat");
$('#hit').click(shuffle);





var compareHand = function compareHand(userHand, compHand) {

}




//Append BankRoll Amount to DOM
$('#bankBalance').append("$" + balance);
