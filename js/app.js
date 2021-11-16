const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const startGame = document.querySelector(".btn__reset");
const overlay = document.getElementById("overlay");
const ul = phrase.querySelector("ul");

let missed = 0;


// Created an array of five phrases and labeled it as phrases 
let phrases = [
    "hello world",
    "coding is fun",
    "love wins",
    "life is good",
    "love nature"
]; 


// return a ramdom phrase from array
const getRandomPhraseAsArray = arr => {
    const randomNumber = Math.floor(Math.random() * arr.length);
    const selectRandom = arr[randomNumber].toLowerCase();
    return selectRandom.split("");
};

const randomPhrase = getRandomPhraseAsArray(phrases)


// adds the letter of a string to display
const addPhraseToDisplay = arr => {
    for (i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        li.textContent = arr[i];
        ul.appendChild(li);

        if (li.textContent != ""){
            li.classList.add("letter");
        } else {
            li.classList.add("space");
        }
    }

}
const randomDisplay = addPhraseToDisplay(randomPhrase)

// check if letter is in the phrase
const checkLetter = button => {


}

// check if the game has been won or lost
const checkWin = () => {


}

// listen for the start game button to be pressed
startGame.addEventListener('click', e => {
    startGame.style.display = "none";
});

// listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {


});