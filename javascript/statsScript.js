const cirProWpm = document.getElementById('progressWpm');
const cirProWpmRaw = document.getElementById('progressWpmRaw');
const cirProAcc = document.getElementById('progressAccuracy');
const cirProMist = document.getElementById('progressMistakes');

const proValWpm = document.querySelector('#progressWpm .progress-value');
const proValWpmRaw = document.querySelector('#progressWpmRaw .progress-value');
const proValAcc = document.querySelector('#progressAccuracy .progress-value');
const proValMist = document.querySelector('#progressMistakes .progress-value');

//stats values modified in main script
let wpm = 0;
let wpmRaw = 0;
let accuracy = 0;
let mistakes = 0;
let totalTypedChars = 0; 

const maxWPM = 100;

function initStats() {
    proValWpm.innerText = 0;
    proValAcc.innerText = 0 + '%';
    proValMist.innerText = 0;
}

initStats();

function progressWPM() {
    proValWpm.innerText = wpm;
    const calWpm = (wpm / maxWPM) * 100;
    cirProWpm.style.background = `conic-gradient(var(--main-color), ${calWpm * 3.6}deg, var(--sub-alt-color) 0deg)`;
}

function progressWPMRaw() {
    proValWpmRaw.innerText = wpmRaw;
    const calWpmRaw = (wpmRaw / maxWPM) * 100;
    cirProWpmRaw.style.background = `conic-gradient(var(--main-color), ${calWpmRaw * 3.6}deg, var(--sub-alt-color) 0deg)`;
}

function progressAccuracy() {
    let calAcc = 0;
    if (totalTypedChars != 0) {
        calAcc = Math.round(((totalTypedChars - mistakes) / totalTypedChars) * 100);
    }
    proValAcc.innerText = calAcc + '%';
    cirProAcc.style.background = `conic-gradient(var(--main-color), ${calAcc * 3.6}deg, var(--sub-alt-color) 0deg)`;
}

function progressMistakes() {
    let calMist = 0;
    if (totalTypedChars != 0) {
        calMist = (mistakes / totalTypedChars) * 100;
    }
    proValMist.innerText = mistakes;
    cirProMist.style.background = `conic-gradient(var(--main-color), ${calMist * 3.6}deg, var(--sub-alt-color) 0deg)`;
}

function updateStats() {
    progressWPM();
    progressWPMRaw();
    progressAccuracy();
    progressMistakes();
}

updateStats();

