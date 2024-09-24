const btnEasy = document.querySelector('.easy');
const btnMedium = document.querySelector('.medium');
const btnHard = document.querySelector('.hard');

const btnStart = document.querySelector('.start');
const btnReset = document.querySelector('.reset');

const blastedCount = document.querySelector('.blastedCount');
const missedCount = document.querySelector('.missedCount');
const streakCount = document.querySelector('.streakCount');
const maxStreakCount = document.querySelector('.maxStreakCount');

let currentObstacles = [];
let currentLevel;

let gameInterval = null;

function init() {
    currentLevel = 'easy';
    addObstacles(getBars);

    airFriction = airFrictionValues[0];
    restitution = restitutionValues[0];
    rate = rateValues[0];

    btnEasy.classList.add('sub-option-selected');
    btnMedium.classList.remove('sub-option-selected');
    btnHard.classList.remove('sub-option-selected');
}

init();

function addObstacles(obstacleFunction, level, _airFriction, _restitution, _rate) {
    if (currentLevel === level) {
        return;
    }

    if (currentObstacles.length > 0) {
        World.remove(engine.world, currentObstacles);
        currentObstacles = [];
    }

    const obstacles = obstacleFunction();
    World.add(engine.world, obstacles);

    currentObstacles = obstacles;
    currentLevel = level;

    airFriction = _airFriction;
    restitution = _restitution;
    rate = _rate;

    maxStreak = 0;
    setStat(maxStreakCount, maxStreak);
}

function setStat(statElement, value){
    statElement.innerText = value;
}

function resetStats(){
    blasts = 0;
    missed = 0;
    streak = 0;

    blastedCount.innerText = 0;
    missedCount.innerText = 0;
    streakCount.innerText = 0;
}

function resetGame() {
    // Loop through all active bombs
    activeBombs.forEach(bombObj => {
        // Remove each bomb from the physics world
        Composite.remove(engine.world, bombObj.bomb);

        // Remove associated DOM elements if they exist
        if (bombObj.wordElement && document.body.contains(bombObj.wordElement)) {
            document.body.removeChild(bombObj.wordElement);
        }

        if (bombObj.ringElement && document.body.contains(bombObj.ringElement)) {
            document.body.removeChild(bombObj.ringElement);
        }
    });

    // Clear the activeBombs array
    activeBombs = [];
    bombUnderProcess = null; // Reset the bomb under process if needed
    charIndex = 0;
    resetStats();
}

btnEasy.addEventListener('click', () => {
    if (gameInterval != null) {
        return;
    }

    addObstacles(getBars, 'easy', airFrictionValues[0], restitutionValues[0], rateValues[0]);

    btnEasy.classList.add('sub-option-selected');
    btnMedium.classList.remove('sub-option-selected');
    btnHard.classList.remove('sub-option-selected');
});

btnMedium.addEventListener('click', () => {
    if (gameInterval != null) {
        return;
    }

    addObstacles(getCircles, 'medium', airFrictionValues[1], restitutionValues[1], rateValues[1]);

    btnEasy.classList.remove('sub-option-selected');
    btnMedium.classList.add('sub-option-selected');
    btnHard.classList.remove('sub-option-selected');
});

btnHard.addEventListener('click', () => {
    if (gameInterval != null) {
        return;
    }

    addObstacles(getAvalanche, 'hard', airFrictionValues[2], restitutionValues[2], rateValues[2]);

    btnEasy.classList.remove('sub-option-selected');
    btnMedium.classList.remove('sub-option-selected');
    btnHard.classList.add('sub-option-selected');
});

btnStart.addEventListener('click', () => {
    if (gameInterval == null) {
        gameInterval = setInterval(() => {
            const randomWord = getRandomWord();
            createBombWithText(randomWord);
        }, rate);
        btnStart.classList.add('selected');
    }
});

btnReset.addEventListener('click', () => {    
    if (gameInterval != null) {
        clearInterval(gameInterval);
        gameInterval = null;
        btnStart.classList.remove('selected');
    }

    resetGame();    
});