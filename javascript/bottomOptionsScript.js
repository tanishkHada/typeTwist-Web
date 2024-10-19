const caretStyle = ['caret-underscore', 'caret-border', 'caret-bg', 'caret-bar'];
const caretStyleButtons = document.querySelectorAll('#btnCaretStyle .list-option');

const btnGithub = document.getElementById('btnGithub');

const smoothValues = [0.1, 0.2, 0.3];
const caretSmoothButtons = document.querySelectorAll('#btnCaretSmooth .list-option');

const fontList = ['Roboto mono', 'Comfortaa', 'Tomorrow', 'Pixelify Sans', 'Architects Daughter', 'Allerta Stencil', 'Goldman', 'Gluten', 'Happy Monkey', 'Slackey', 'Finger Paint', 'Protest Riot'];
const fontButtons = document.querySelectorAll('#btnFont .list-option');

const tick_style = document.createElement('span');
tick_style.innerText = '✔';
tick_style.style.marginLeft = 'auto';

const tick_smooth = document.createElement('span');
tick_smooth.innerText = '✔';
tick_smooth.style.marginLeft = 'auto';

const tick_font = document.createElement('span');
tick_font.innerText = '✔';
tick_font.style.marginLeft = 'auto';

let defaultCaretInd = parseInt(localStorage.getItem('currentCaretStyle')) || 3;
let defaultCaretSmoothInd = parseInt(localStorage.getItem('currentCaretSmoothness')) || 0;
let defaultFontInd = parseInt(localStorage.getItem('currentFont')) || 8;

const btnKeyBoardPractice = document.getElementById('btnKeyboardPractice');
const testContent = document.querySelector('.test');
const keyboardPractice = document.querySelector('.keyboard-practice');
let flag = false;

function initCaret() {
    for (let i = 0; i < caretStyle.length; i++) {
        removeClass(caret, [caretStyle[i]]);
    }
    addClass(caret, [caretStyle[defaultCaretInd]]);
    addClass(caretStyleButtons[defaultCaretInd], ['selected']);

    caretStyleButtons[defaultCaretInd].appendChild(tick_style);
}

function initCaretSmooth(){
    const root = document.documentElement;
    root.style.setProperty('--caretTransition', smoothValues[defaultCaretSmoothInd] + 's');
    addClass(caretSmoothButtons[defaultCaretSmoothInd], ['selected']);

    caretSmoothButtons[defaultCaretSmoothInd].appendChild(tick_smooth);
}

function initFonts(){
    for(let i = 0 ; i < fontList.length ; i++){
        fontButtons[i].style.fontFamily = `${fontList[i]}, monospace`;
    }    
    const root = document.documentElement;
    root.style.setProperty('--fontStyle', `${fontList[defaultFontInd]}, monospace`);
    addClass(fontButtons[defaultFontInd], ['selected']);

    fontButtons[defaultFontInd].appendChild(tick_font);
}

function changeCaretStyle(index) {
    for (let i = 0; i < caretStyle.length; i++) {
        removeClass(caret, [caretStyle[i]]);
        removeClass(caretStyleButtons[i], ['selected']);
    }
    addClass(caret, [caretStyle[index]]);
    addClass(caretStyleButtons[index], ['selected']);
    caretStyleButtons[index].appendChild(tick_style);

    //save to localStorage
    localStorage.setItem('currentCaretStyle', index);
}

function changeCaretSmoothness(index){
    for(let i = 0 ; i < smoothValues.length ; i++){
        removeClass(caretSmoothButtons[i], ['selected']);
    }
    addClass(caretSmoothButtons[index], ['selected']);
    const root = document.documentElement;
    root.style.setProperty('--caretTransition', smoothValues[index] + 's');

    caretSmoothButtons[index].appendChild(tick_smooth);

    //save to localStorage
    localStorage.setItem('currentCaretSmoothness', index);
}

function changeFont(index){
    for(let i = 0 ; i < fontList.length ; i++){
        removeClass(fontButtons[i], ['selected']);
    }

    const root = document.documentElement;
    root.style.setProperty('--fontStyle', `${fontList[index]}, monospace`);
    addClass(fontButtons[index], ['selected']);

    fontButtons[index].appendChild(tick_font);

    //save to localStorage
    localStorage.setItem('currentFont', index);
}

function handleKeyboardPractice(){
    flag = !flag;

    if(flag){
        addClass(btnKeyBoardPractice, ['selected']);
        testContent.style.display = 'none';

        keyboardPractice.style.display = 'flex';
        resetPractice();
    }
    else{
        removeClass(btnKeyBoardPractice, ['selected']);
        keyboardPractice.style.display = 'none';

        testContent.style.display = 'flex';
        resetGame();
    }
}

initCaret();
initCaretSmooth();
initFonts();
updateCursor();

caretStyleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        changeCaretStyle(index);
    });
});

caretSmoothButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        changeCaretSmoothness(index);
    });
});

fontButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        changeFont(index);
    });
});

btnGithub.addEventListener('click', () => {
    window.open('https://github.com/tanishkHada/typeTwist-Web', '_blank');
})

btnKeyBoardPractice.addEventListener('click', handleKeyboardPractice);




