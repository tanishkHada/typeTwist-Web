const practiceChars = [..."qwertyuiop[]asdfghjkl;'zxcvbnm,./"];
let currChar = '';

const accuracyCountSpan = document.getElementById('accuracyCount');
const correctSpan = document.getElementById('correctCount');
const incorrectSpan = document.getElementById('incorrectCount');
const btnReset = document.querySelector('.keyboard-practice .options #btnReset');

let correct = 0, incorrect = 0, accuracyCount = 0;

function getRandomChar(){
    let randomChar;
    do{
        const randomInd = Math.floor(Math.random() * practiceChars.length);
        randomChar = practiceChars[randomInd];
    }while(randomChar === currChar);
    return randomChar;
}

function selectRandomChar(){
    if(currChar){
        const prevKeyDiv = document.querySelector(`.keyboard-practice .keymap .keymapKey[data-key*="${currChar}"]`);
        if(prevKeyDiv){
            removeClass(prevKeyDiv, ['selected']);
        }
    }    

    currChar = getRandomChar();

    const keyDiv = document.querySelector(`.keyboard-practice .keymap .keymapKey[data-key*="${currChar}"]`);
    if(keyDiv){
        addClass(keyDiv, ['selected']);
    }
}

document.addEventListener('keydown', (event) => {
    let key = event.key;

    if(key === '"'){
        key = "'";
    }

    const keyDiv = document.querySelector(`.keyboard-practice .keymap .keymapKey[data-key*="${key}"]`);
    if (keyDiv) {
        addClass(keyDiv, ['pressed']);
    }

    if(key === currChar){
        removeClass(keyDiv, ['selected']);
        selectRandomChar();
        correct++;
        correctSpan.innerText = correct;
    }
    else{
        incorrect++;
        incorrectSpan.innerText = incorrect;
    }

    accuracyCount = Math.floor((correct / (correct + incorrect)) * 100);
    accuracyCountSpan.innerText = accuracyCount + '%';
});

document.addEventListener('keyup', (event) => {
    let key = event.key;

    if(key === '"'){
        key = "'";
    }

    const keyDiv = document.querySelector(`.keyboard-practice .keymap .keymapKey[data-key*="${key}"]`);
    if (keyDiv) {
        removeClass(keyDiv, ['pressed']);
    }
});

selectRandomChar();

function resetPractice(){
    correct = 0;
    incorrect = 0;
    accuracyCount = 0;
    
    correctSpan.innerText = correct;
    incorrectSpan.innerText = incorrect;
    accuracyCountSpan.innerText = accuracyCount + '%';

    selectRandomChar();
    toggleAnimation(false);
}

btnReset.addEventListener('click', resetPractice);