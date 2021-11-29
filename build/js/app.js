let wordSelected;
let wordUnderscores;
const wordGuess = document.querySelector(".word-guess__p")
const startButton = document.querySelector(".start__button")

const wordOptionsPoolString = "JavaScript,TypeScript,Python,jQuery,React,Underscore"
const wordOptionsPoolArray = wordOptionsPoolString.split(',')

const startGame = function() {
    selectRandomWordFromPool();
    writeUnderScores();
}


const selectRandomWordFromPool = function() {
    wordSelected = wordOptionsPoolArray[Math.floor(Math.random()*wordOptionsPoolArray.length)]
    wordSelectedArray = wordSelected.split('')
    console.log(wordSelectedArray)
}
const writeUnderScores = function() {
    wordUnderscores = ''
    for (i = 0; i < wordSelected.length; i++) {
        wordUnderscores += '_'  
    }
    wordGuess.textContent = wordUnderscores
}
const keyPress = function(e) {
    if(wordSelectedArray.includes(e.key) === true) {
        
        let keyPressed = e.key 
        console.log(typeof keyPressed)
        let keyIndex = wordSelected.indexOf(keyPressed )
        console.log( keyIndex)
        // console.log(wordSelected.indexof(keyPressed))
        wordUnderscores = wordUnderscores[keyIndex].replace(wordUnderscores[keyIndex] , e.key)
        console.log(wordUnderscores)
        // wordGuess.textContent = wordUnderscores
    }
}

startButton.addEventListener("click", startGame)
document.addEventListener("keypress", keyPress)