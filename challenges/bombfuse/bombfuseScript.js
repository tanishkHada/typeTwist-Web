const blastSound = document.getElementById('blastSound');

const { Engine, Render, Runner, World, Bodies, Body, Events, Composite, Constraint, Composites } = Matter;

// Create an engine
const engine = Engine.create();

// Create a renderer
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 1000,
        height: 700,
        wireframes: false
    }
});

// Create ground and container walls
const ground = Bodies.rectangle(500, 695, 1000, 10, { isStatic: true });
const leftWall = Bodies.rectangle(5, 350, 10, 700, { isStatic: true });
const rightWall = Bodies.rectangle(995, 350, 10, 700, { isStatic: true });
const topWall = Bodies.rectangle(500, 5, 1000, 10, { isStatic: true });

// Add all walls to the world
World.add(engine.world, [ground, leftWall, rightWall, topWall]);

//airfriction
let airFrictionValues = [0, 0, 0];
let restitutionValues = [0.5, 0.8, 0.7];
let rateValues = [1800, 1700, 1500];

let airFriction, restitution, rate;

// List of words for bombs
let activeBombs = [];

let bombIdCounter = 0; // Unique ID counter
let bombUnderProcess = null;

// Function to create a bomb with text
function createBombWithText(word) {
    const bombId = bombIdCounter++; // Generate a unique ID

    const posX = Math.floor(Math.random() * (900 - 50 + 1)) + 50;

    // Bomb body (circle)
    const bombBody = Bodies.circle(posX, 50, 25, {
        restitution: restitution,
        frictionAir: airFriction,
        render: {
            fillStyle: '#2c3e50', // Dark grey/black bomb color
        }
    });

    // Bomb fuse (small rectangle)
    const bombFuse = Bodies.rectangle(posX, 25, 5, 15, {
        isStatic: false,
        render: {
            fillStyle: '#f39c12' // Orange color for the fuse
        }
    });

    // Create a constraint to connect the bomb body and fuse
    const bombConstraint = Constraint.create({
        bodyA: bombBody,
        bodyB: bombFuse,
        pointA: { x: 0, y: -25 },  // Attach fuse to top of the bomb body
        pointB: { x: 0, y: 10 },
        stiffness: 0.9,
        length: 0
    });

    const wordContent = getWordInSpans(word);

    // Create a DOM element to display the text
    const wordElement = document.createElement('div');
    wordElement.classList.add('word');
    wordElement.innerHTML = wordContent;
    document.body.appendChild(wordElement);

    const ringElement = document.createElement('div');
    document.body.appendChild(ringElement);

    // Get the canvas's bounding box
    let canvasBounds = render.canvas.getBoundingClientRect();

    // Update the position of the word and ring with the bomb
    const updatePosition = () => {
        const bombX = bombBody.position.x + canvasBounds.left;
        const bombY = bombBody.position.y + canvasBounds.top;

        wordElement.style.left = `${bombX}px`; // Adjust to center text
        wordElement.style.top = `${bombY + 30}px`; // Position text below bomb

        ringElement.style.left = `${bombX - 24}px`; // Adjust for centering ring around the bomb
        ringElement.style.top = `${bombY - 24}px`;
    };

    // Update the position before every physics update
    Events.on(engine, 'beforeUpdate', updatePosition);

    // Update the canvas bounds and reposition elements when the window is resized
    window.addEventListener('resize', () => {
        canvasBounds = render.canvas.getBoundingClientRect();
        updatePosition(); // Immediately update position to handle resize
    });

    // Combine bomb body, fuse, and constraint into one composite
    const bomb = Composite.create({
        bodies: [bombBody, bombFuse],
        constraints: [bombConstraint]
    });

    // Add the bomb to the world
    World.add(engine.world, bomb);

    const bombObj = { id: bombId, bombBody, bomb, word, wordElement, ringElement }

    // Add the bomb and word to the activeBombs list with unique ID
    activeBombs.push(bombObj);

    // Trigger explosion when the bomb body touches the ground
    Events.on(engine, 'collisionStart', function (event) {
        event.pairs.forEach(pair => {
            if ((pair.bodyA === bombBody || pair.bodyA === bombFuse) || (pair.bodyB === bombBody || pair.bodyB === bombFuse)) {
                if (pair.bodyA === ground || pair.bodyB === ground) {
                    explodeOnGround(bombBody);
                    removeBomb(bombObj, wordElement);  // Remove bomb after explosion

                    missed++;
                    streak = 0;
                    setStat(missedCount, missed);
                    setStat(streakCount, streak);
                }
            }
        });
    });
}


// Function to remove bomb from world and DOM
function removeBomb(bombObj, wordElement) {
    // blastSound.currentTime = 0;
    // blastSound.play();

    if (bombUnderProcess != null && bombObj.id === bombUnderProcess.id) {
        bombUnderProcess = null;
        charIndex = 0;
    }

    Composite.remove(engine.world, bombObj.bomb);

    activeBombs = activeBombs.filter(b => b.bomb !== bombObj.bomb);

    if (wordElement && document.body.contains(wordElement)) {
        document.body.removeChild(wordElement);
        document.body.removeChild(bombObj.ringElement);
    }
}

// Function to explode the bomb with the unique ID
function explodeOnGround(bombBody) {
    const particles = [];
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        // Generate a random number of sides for the polygon (between 3 and 6)
        const sides = Math.floor(Math.random() * 4) + 3; // Random number between 3 and 6
        const size = Math.random() * 10 + 5; // Random size for the shape

        const shape = Bodies.polygon(bombBody.position.x, bombBody.position.y, sides, size, {
            render: {
                fillStyle: 'transparent',
                strokeStyle: randomColor(),
                lineWidth: 2
            }
        });

        // Apply a random force to each particle
        Body.applyForce(shape, shape.position, {
            x: (Math.random() - 0.5) * 0.05,
            y: (Math.random() - 0.5) * 0.05
        });

        particles.push(shape);
    }

    World.add(engine.world, particles);

    // Trigger the shake effect when the bomb explodes
    shakeEffect();

    // Remove particles after 3 seconds
    setTimeout(() => {
        particles.forEach(particle => World.remove(engine.world, particle));
    }, 2000);
}

function explodeMidAir(bombBody) {
    const particles = [];
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const isFilled = Math.random() > 0.5;

        // Generate a random number of sides for the polygon (between 3 and 6)
        const sides = Math.floor(Math.random() * 4) + 3; // Random number between 3 and 6
        const size = Math.random() * 10 + 5; // Random size for the shape

        const shape = Bodies.polygon(bombBody.position.x, bombBody.position.y, sides, size, {
            render: {
                fillStyle: isFilled ? randomColor() : 'transparent',
                strokeStyle: '#333',
                lineWidth: 2
            }
        });

        // Apply a random force to each particle
        Body.applyForce(shape, shape.position, {
            x: (Math.random() - 0.5) * 0.05,
            y: (Math.random() - 0.5) * 0.05
        });

        particles.push(shape);
    }

    World.add(engine.world, particles);

    // Trigger the shake effect when the bomb explodes
    shakeEffect();

    // Remove particles after 3 seconds
    setTimeout(() => {
        particles.forEach(particle => World.remove(engine.world, particle));
    }, 2000);
}

// Function to apply a shake effect to the canvas
function shakeEffect() {
    const shakeDuration = 200; // Duration of the shake effect in milliseconds
    const shakeMagnitude = 5; // Maximum displacement during the shake

    const startTime = Date.now();

    function applyShake() {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;

        if (elapsedTime < shakeDuration) {
            // Calculate random offsets for shake effect
            const randomX = (Math.random() - 0.5) * shakeMagnitude * 2;
            const randomY = (Math.random() - 0.5) * shakeMagnitude * 2;

            // Apply the random offset to the render position
            render.canvas.style.transform = `translate(${randomX}px, ${randomY}px)`;

            // Continue applying the shake effect
            requestAnimationFrame(applyShake);
        } else {
            // Reset the canvas position once the shake effect is over
            render.canvas.style.transform = 'translate(0, 0)';
        }
    }

    applyShake();
}

// Function to generate random colors for filled triangles
function randomColor() {
    const colors = ['#e74c3c', '#f1c40f', '#2ecc71', '#9b59b6'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Handle typing and check if the typed word matches any active bomb's word
document.addEventListener('keydown', function (event) {
    const typedChar = event.key.toLowerCase();  // Check typed key
    activeBombs.forEach(bomb => {
        if (bomb.word[0].toLowerCase() === typedChar) {
            if (bombUnderProcess == null) {
                bombUnderProcess = bomb;
                bomb.wordElement.classList.add('selected');
                processWordBomb(typedChar);
            }
        }
    });
});

// Run the engine and the renderer
Engine.run(engine);
Render.run(render);

// Create a runner
const runner = Runner.create();
Runner.run(runner, engine);

