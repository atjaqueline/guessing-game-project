const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const startGame = document.querySelector(".btn__reset");
const overlay = document.getElementById("overlay");
const ul = phrase.querySelector("#phrase ul");

// track number of wrong guesses
let missed = 0;


// Created an array of five phrases and labeled it as phrases 
let phrases = [
    "hello world",
    "coding is fun",
    "love wins",
    "life is good",
    "love nature"
]; 

// listen for the start game button to be pressed
startGame.addEventListener('click', e => {
    overlay.style.display = "none";
});

// start game
const randomPhrase = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(randomPhrase);


// return a ramdom phrase from array
function getRandomPhraseAsArray(arr) {
    const randomNumber = Math.floor(Math.random() * arr.length);
    const selectRandom = arr[randomNumber].toLowerCase();
    return selectRandom.split("");
};




// adds the letter of a string to display
function addPhraseToDisplay(arr) {
    for (i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.textContent = arr[i];
        ul.appendChild(li);

        if (arr[i] !== " "){
            li.className = "letter";
        } else {
            li.className = "space";
        }
    }
}


// check if letter is in the phrase
const checkLetter = button => {


}

// check if the game has been won or lost
const checkWin = () => {


}



// listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {


});