const btnNormal = document.getElementById('btnNormal');
const btnHard = document.getElementById('btnHard');

const btnPunctuation = document.getElementById('btnPunctuation');
const btnWords = document.getElementById('btnWords');

const diffButtons = [btnNormal, btnHard];
const typeButtons = [btnPunctuation, btnWords];

function initButtons(){
    addClass(btnNormal, ['selected']);
    addClass(btnWords, ['selected']);
}

function addClass(ele, names) {
    names.forEach(name => {
        ele.classList.add(name);
    });
}

function removeClass(ele, names) {
    names.forEach(name => {
        ele.classList.remove(name);
    });
}

initButtons();

// ******* generate test  ******

//changes according to time
let numberOfWords = 40;

function getWordsString(wordList, count){
    let selectedWords = [];
    let previousWord = null;

    for(let i = 0 ; i < count ; i++){
        let word;

        //keep selecint a word until its different from previous one
        do{
            word = wordList[Math.floor(Math.random() * wordList.length)];
        }while(word == previousWord);

        selectedWords.push(word);
        previousWord = word;
    }

    //join the words with a space to form the final string
    return selectedWords.join(' ');
}

function getPunctuatedWordsString(wordList, count){
    let selectedWords = [];
    let previousWord = null;
    const punctuationMarks = ['.', ',', '!', ';', '?', '"', "'", ':'];
    const punctuationProbability = 0.5; // 50% chance to add punctuation
    const capitalizationProbability = 0.3; // 30% chance to capitalize the word

    for (let i = 0; i < count; i++) {
        let word;

        // Keep selecting a word until it's different from the previous one
        do {
            word = wordList[Math.floor(Math.random() * wordList.length)];
        } while (word === previousWord);

        // Randomly decide whether to capitalize the word
        if (Math.random() < capitalizationProbability) {
            word = word.charAt(0).toUpperCase() + word.slice(1); // Capitalize the first letter
        }

        // Randomly decide whether to add punctuation based on probability
        if (Math.random() < punctuationProbability) {
            let punctuation = punctuationMarks[Math.floor(Math.random() * punctuationMarks.length)];

            // If punctuation is " or ', enclose the word in it
            if (punctuation === '"' || punctuation === "'") {
                word = `${punctuation}${word}${punctuation}`;
            } else {
                word += punctuation; // Add other punctuation at the end
            }
        }

        selectedWords.push(word);
        previousWord = word;
    }

    // Join the words with a space to form the final string
    return selectedWords.join(' ');
}

function getText(){
    if(btnNormal.classList.contains('selected') && btnWords.classList.contains('selected')){
        return getWordsString(easyWords, numberOfWords);
    }
    else if(btnNormal.classList.contains('selected') && btnPunctuation.classList.contains('selected')){
        return getPunctuatedWordsString(easyWords, numberOfWords);
    }
    else if(btnHard.classList.contains('selected') && btnWords.classList.contains('selected')){
        return getWordsString(hardWords, numberOfWords);
    }
    else 
      return getPunctuatedWordsString(hardWords, numberOfWords);
}
