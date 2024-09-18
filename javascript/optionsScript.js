const time15 = document.getElementById('btn15');
const time30 = document.getElementById('btn30');
const time60 = document.getElementById('btn60');
const time120 = document.getElementById('btn120');

const timeButtons = [time15, time30, time60, time120];

const btnReload = document.getElementById('btnReload');

function initOptions(){
    maxTime = parseInt(time30.innerText);
    timeLeft = maxTime;
    addClass(time30, ['selected']);   
}

function handleTimeButtonClick(event){
    timeButtons.forEach(button => {
        removeClass(button, ['selected']);
    });

    addClass(event.target, ['selected']);
    maxTime = parseInt(event.target.innerText);
    timeLeft = maxTime;
    timerTag.innerText = event.target.innerText;

    switch(maxTime){
        case 15 : numberOfWords = 25; break;
        case 30 : numberOfWords = 40; break;
        case 60 : numberOfWords = 60; break;
        case 120 : numberOfWords = 80; break;
    }
    
    resetGame();
}

function handleDiffTypeButtons(buttons, event)
{
    buttons.forEach(button => {
        if(button === event.currentTarget){
            addClass(button, ['selected']);
        }
        else{
            removeClass(button, ['selected']);
        }
    });
    resetGame();
}

timeButtons.forEach(button => {
    button.addEventListener('click', handleTimeButtonClick);
});

diffButtons.forEach(button => {
    button.addEventListener('click', function(event){
        handleDiffTypeButtons(diffButtons, event);
    });
});

typeButtons.forEach(button => {
    button.addEventListener('click', function(event){
        handleDiffTypeButtons(typeButtons, event);
    });
});

initOptions();

btnReload.addEventListener('click', resetGame);