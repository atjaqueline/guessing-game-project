// global variables
const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const startGame = document.querySelector(".btn__reset");
const overlay = document.getElementById("overlay");
const ul = document.querySelector('#phrase ul');


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

// attach an event listener to the start game button to hide the start screen overlay

startGame.addEventListener('click', ( ) => {
    overlay.style.display = 'none';
});


// return a random phrase from array
function getRandomPhrasesAsArray(arr) {
    const randomNumber = Math.floor(Math.random() * arr.length);
    const selectRandom = arr[randomNumber].toLowerCase();
    return selectRandom.split("");
}

 const getPhrase = getRandomPhrasesAsArray(phrases);

// add random phrases to display
function addPhraseToDisplay(arr){
    const ul = phrase.querySelector("#phrase ul");
    for (i=0; i < arr.length; i++){
        const li = document.createElement('li');
        li.textContent = arr[i];
        ul.appendChild(li);

        if(arr[i] === ' '){
           li.className = 'space'; 
        } else {
            li.className = 'letter';
        }

    }
}

const phraseDisplay = addPhraseToDisplay(getPhrase);

// check if a letter is in the phrase
function checkLetter(button) {
    const letters = document.querySelectorAll(".letter");
    let match = null;

    for (i = 0; i < letters.length; i++){
        if (button.textContent === letters[i].textContent) {
            letters[i].classList.add('show');
            letters[i].style.transition = '.5s ease-in-out';
             match = true;
        } 
    }
    return match;
}

//add an event listener to the keyboard
qwerty.addEventListener('click', (e) => {
    const hearts = document.querySelectorAll('img');


    if(e.target.tagName === 'BUTTON') {
        e.target.className = 'chosen';
        e.target.setAttribute('disabled', ' ');

        let match = checkLetter(e.target);

        if (match === null) {
            
            hearts[missed].src = "images/lostHeart.png";

            missed++;
        }
        checkWin();
    }
});

// create a checkwin function
function checkWin() {
    const letterClass = document.getElementsByClassName('letter');
    const showClass = document.getElementsByClassName('show');
    let message = document.querySelector(".title");

    if (letterClass.length === showClass.length){
        overlay.style.display = 'flex';
        overlay.className = 'win';
        message.textContent = 'YAAAAY! YOU WON!!!';
        playAgain();
    } else if (missed > 4){
        overlay.style.display = 'flex';
        overlay.className = 'lose';
        message.textContent = 'Oh no! You Lost!! No worries, you can try again!';
        playAgain();
    }
    
}

function playAgain() {
startGame.textContent = 'Play again';

missed = 0;
ul.textContent ='';
const choseLetters = document.querySelectorAll('.chosen');


for (let i = 0; i < choseLetters.length; i++){
    choseLetters[i].classList.remove('chosen');
    choseLetters[i].disabled = false;
}


const getPhrase = getRandomPhrasesAsArray(phrases);
addPhraseToDisplay(getPhrase);

const lives = document.querySelectorAll('.tries img');
    for (let i=0; i<lives.length; i++) {
        lives[i].src = 'images/liveHeart.png';
    }   
   
}