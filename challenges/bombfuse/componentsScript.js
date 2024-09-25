const words = ['boom', 'moon', 'grenede', 'elite', 'aboard', 'fixed', 'summer', 'winter', 'country', 'utility', 'vroom', 'hostile'];

let index = -1;
let charIndex = 0;

let blasts = 0, missed = 0, streak = 0;
let maxStreak = 0;

function getRandomWord() {
    return getWord();
}

function getWordInSpans(word) {
    let wordContent = '';

    word.split('').forEach(char => {
        let span = `<span>${char}</span>`;
        wordContent += span;
    });

    return wordContent;
}

function processWordBomb(typedChar) {
    const word = bombUnderProcess.word;

    if (charIndex < word.length && word[charIndex] == typedChar) {
        bombUnderProcess.wordElement.children[charIndex].style.color = '#34495e';
        charIndex++;

        if (charIndex == word.length) {
            bombUnderProcess.ringElement.classList.add('ring');
        }
    }
    if (charIndex >= word.length && typedChar == ' ') {

        explodeMidAir(bombUnderProcess.bombBody);
        removeBomb(bombUnderProcess, bombUnderProcess.wordElement);

        blasts++;
        streak++;
        setStat(blastedCount, blasts);
        setStat(streakCount, streak);

        if (maxStreak < streak) {
            maxStreak = streak;
            setStat(maxStreakCount, maxStreak);
        }

        charIndex = 0;
    }
}

document.addEventListener('keydown', function (event) {
    const typedChar = event.key.toLowerCase();

    if (bombUnderProcess != null) {
        processWordBomb(typedChar);
    }
});


/******* OBSTACLES *********/

function getBars() {
    const bars = [];
    const barWidth = 100;
    const barHeight = 10;
    const rows = 5; // Number of rows
    const spacing = 110; // Vertical spacing between rows

    for (let row = 0; row < rows; row++) {
        const numBars = 6; // Random number of bars (2 to 5)
        for (let col = 0; col < numBars; col++) {
            const x = 80 + col * (800 / numBars) * 1.2 + (row % 2) * 50; // Staggered positions
            const y = 100 + row * spacing;

            // Alternate the angle: tilt right for even index and left for odd index
            const angle = (col % 2 === 0) ? Math.PI / 6 : -Math.PI / 6;

            const bar = Bodies.rectangle(x, y, barWidth, barHeight, {
                isStatic: true,
                angle: angle,
                render: {
                    fillStyle: '#243243' //#2b3c4f' //#304357' //'#34495e'
                }
            });
            bars.push(bar);
        }
    }
    return bars;
}

function getCircles() {
    const circles = [];
    const circleRadius = 17; // Radius of the circles
    const rows = 5; // Number of rows
    const spacing = 110; // Vertical spacing between rows

    for (let row = 0; row < rows; row++) {
        let numCircles = 10; // Number of circles in each row
        for (let col = 0; col < numCircles; col++) {
            const x = 45 + col * (800 / numCircles) * 1.2 + (row % 2) * 50; // Staggered positions
            const y = 100 + row * spacing;

            // Create a circle
            const circle = Matter.Bodies.circle(x, y, circleRadius, {
                isStatic: true,
                render: {
                    fillStyle: '#243243' //#2b3c4f' //#304357' //'#34495e'
                }
            });
            circles.push(circle);
        }
    }
    return circles;
}

function getAvalanche() {
    const avalancheBars = [];
    const bar1 = Bodies.rectangle(200, 150, 700, 20, { isStatic: true, angle: Math.PI * 0.08, render: { fillStyle: '#243243' } });

    const bar2 = Bodies.rectangle(800, 350, 700, 20, { isStatic: true, angle: -Math.PI * 0.08, render: { fillStyle: '#243243' } });

    const bar3 = Bodies.rectangle(300, 580, 200, 20, { isStatic: true, angle: Math.PI * 0.1, render: { fillStyle: '#243243' } });

    avalancheBars.push(bar1);
    avalancheBars.push(bar2);
    avalancheBars.push(bar3);

    return avalancheBars;
}







