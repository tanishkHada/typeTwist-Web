const words = document.querySelector('.words');
const inputField = document.querySelector('.input-field');
const wordsContainer = document.querySelector('.test .words-container');
const caret = document.querySelector('.test .words-container .caret');
const timerTag = document.querySelector('.test .timer-tag');

let paragraph;

let chars;
let charIndex = 0;

let timer;
let maxTime = 30;
let timeLeft = maxTime;
let isTyping = false;

function scrollLine() {
    const lineHeight = 40;
    const margin = parseInt(words.style.marginTop || '0px');
    words.style.marginTop = (margin - lineHeight) + 'px';

    updateCursor();
}

function updateCursor() {
    if (charIndex < chars.length) {
        const spanRect = chars[charIndex].getBoundingClientRect();
        const containerRect = wordsContainer.getBoundingClientRect();

        const leftPos = spanRect.left - containerRect.left;
        const topPos = spanRect.top - containerRect.top;

        caret.style.left = `${leftPos}px`;
        caret.style.top = `${topPos}px`;

        caret.style.width = `${spanRect.width}px`;
        caret.style.height = `${spanRect.height}px`;

        //scroll lines
        if (parseInt(topPos) >= 50) {
            scrollLine();
        }
    }
}

function initText() {
    removeClass(wordsContainer, ['fade-in']);
    
    //force reflow to ensure the class is removed
    void wordsContainer.offsetWidth;
    
    addClass(wordsContainer, ['fade-in']);

    words.innerHTML = '';
    paragraph = getText();

    let content = '';
    paragraph.split('').forEach(char => {
        let span = `<span>${char}</span>`;
        content += span;
    });

    words.innerHTML = content;

    chars = words.querySelectorAll('span');
    document.addEventListener('keydown', () => inputField.focus());
    wordsContainer.addEventListener('click', () => inputField.focus());

    addClass(caret, ['blink']);

    updateCursor();
}

function addChar(index, char) {
    const newSpan = document.createElement('span');
    newSpan.innerText = char;
    addClass(newSpan, ['wrong']);

    const referenceNode = chars[index];
    words.insertBefore(newSpan, referenceNode);

    chars = words.querySelectorAll('span');
}

function removeChar(index) {
    const spanToRemove = chars[index];
    if (spanToRemove) {
        words.removeChild(spanToRemove);
        chars = words.querySelectorAll('span');
    }
}

function calculateWPM() {
    if (maxTime - timeLeft > 0) {
        wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
    }
    else {
        wpm = 0;
    }

    calculateWPMRaw();
}

function calculateWPMRaw() {
    if (maxTime - timeLeft > 0) {
        wpmRaw = Math.round((charIndex / 5) / (maxTime - timeLeft) * 60);
    }
    else {
        wpmRaw = 0;
    }
}

function initTimer() {
    if (timeLeft > 0 && charIndex < chars.length) {
        timeLeft--;
        timerTag.innerText = timeLeft;

        calculateWPM();
        updateStats();
    }
    else {
        isTyping = false;
        clearInterval(timer);
    }
}

function type() {
    let typedChar = inputField.value[charIndex];

    if (charIndex < chars.length - 1 && timeLeft > 0) {

        //starting typing for the first time
        if (!isTyping) {
            isTyping = true;
            removeClass(caret, ['blink']);
            timer = setInterval(initTimer, 1000);
            toggleAnimation(isTyping);
        }

        //if typed char is undefined means a backspace
        if (typedChar == undefined) {

            //handle backspace when previous char is a space
            if (charIndex > 0 && chars[charIndex - 1].innerText == ' ') {
                return;
            }

            if (charIndex > 0) {
                charIndex--;

                //if it is extra wrong char
                if (chars[charIndex].classList.contains('wrong')) {
                    removeChar(charIndex);
                    mistakes--;
                }
                else {
                    //do a check if it was incorrect decrement mistakes
                    if (chars[charIndex].classList.contains('incorrect')) {
                        mistakes--;
                    }

                    removeClass(chars[charIndex], ['correct', 'incorrect']);
                    chars[charIndex].style.textDecoration = 'none';
                }
            }
        }
        //if typed char
        else {
            //if typed correct char
            if (chars[charIndex].innerText == typedChar) {
                addClass(chars[charIndex], ['correct']);
            }
            else {
                //increase mistakes here
                mistakes++;

                //if typed wrong extra char, means when have to type space
                if (chars[charIndex].innerText == ' ') {
                    addChar(charIndex, typedChar);
                }
                //if typed incorrect char
                else {
                    addClass(chars[charIndex], ['incorrect']);
                    chars[charIndex].style.textDecoration = 'underline';
                }
            }
            charIndex++;
        }
        totalTypedChars = charIndex;
        updateCursor();
        calculateWPM();
        updateStats();
    }
    else {
        isTyping = false;
        clearInterval(timer);
    }
}

function resetGame() {
    inputField.value = '';
    charIndex = 0;
    timeLeft = maxTime;
    isTyping = false;
    timerTag.innerText = maxTime;
    words.style.marginTop = '0px';
    clearInterval(timer);

    wpm = 0;
    wpmRaw = 0;
    accuracy = 0;
    mistakes = 0;
    totalTypedChars = 0;
    updateStats();

    toggleAnimation(isTyping);

    initText();
}

function handleBackspace(event) {
    if (event.key === 'Backspace' && charIndex > 0 && chars[charIndex - 1].innerText == ' ') {
        event.preventDefault();
    }
}

window.addEventListener('resize', updateCursor);
inputField.addEventListener('input', type);
inputField.addEventListener('keydown', (event) => handleBackspace(event));
initText();

//keymap
document.addEventListener('keydown', (event) => {
    let key = event.key;

    if(key === '"'){
        key = "'";
    }

    const keyDiv = document.querySelector(`.test .keymap .keymapKey[data-key*="${key}"]`);
    if (keyDiv) {
        addClass(keyDiv, ['pressed']);
    }
});

document.addEventListener('keyup', (event) => {
    let key = event.key;

    if(key === '"'){
        key = "'";
    }

    const keyDiv = document.querySelector(`.test .keymap .keymapKey[data-key*="${key}"]`);
    if (keyDiv) {
        removeClass(keyDiv, ['pressed']);
    }
});