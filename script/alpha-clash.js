// function play(){
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden')
//     // console.log(homeSection.classList)
//     // Show the play ground
//     const playGroundSection = document.getElementById('play-ground')
//     playGroundSection.classList.remove('hidden')
//     // console.log(playGroundSection.classList)
// }

function handlerKeyboardKeyUpEvent(event){
     const playerPressed= event.key; 
     console.log('play pressed',playerPressed)
    //  ------stop the game if pressed Esc----------
    if( playerPressed === 'Escape'){
        gameOver()
    }
    //  console.log(playerPressed)

    //  key player is expected to pressed
    const currentAlphabetElement= document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check right or wrong key pressed
    if(playerPressed === expectedAlphabet){
        console.log('you get a point')

        const currentScore = getTextValueElementById('current-score')
        const updatedScore = currentScore + 1;
        setTextValueElementById('current-score',updatedScore)







        // ------------------------------------ignore ------------------------------
        // console.log('you have pressed correctly',expectedAlphabet)
        // // update score 
        // // 1 : get the current score
        // const currentScoreElement = document.getElementById('current-score')
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore)
        // // 2 : increase the score by 1
        // const newScore = currentScore + 1;

        // // // show the update score
        // currentScoreElement.innerText= newScore;
        // // start a new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame();
        
    }else{
        console.log('dhurr vaia vaa apu . right key press koro') 

        const currentLife = getTextValueElementById('current-life')
        const updatedLife = currentLife - 1
        setTextValueElementById('current-life',updatedLife)

        if( updatedLife === 0){
            console.log('game over')
            gameOver()
        }
        // step-1: get the current life number
        // const currentLifeElement = document.getElementById('current-life')
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText)
        // console.log(currentLifeElement)
        // // step-2: reduce the life count 
        // const newLife= currentLife - 1;
        // // step-3: display the life update count 
        // currentLifeElement.innerText = newLife
    }

}

 document.addEventListener('keyup',handlerKeyboardKeyUpEvent)


function continueGame(){
// generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('random alphabet is:',alphabet)

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText= alphabet

    setBackgroundById(alphabet)
}

function play(){
    // hide everything show only the play ground
    hideElementById('home-screen')
    hideElementById('final-score')
    showElementById('play-ground')
    // reset score and life
    setTextValueElementById ('current-life',5)
    getTextValueElementById ('current-score',0)
    continueGame()
}

function gameOver(){
    hideElementById('play-ground')
    showElementById('final-score')
    // update final score
    // gat the final score
    const lastScore = getTextValueElementById('current-score')
    console.log(lastScore)
    setTextValueElementById('last-score',lastScore)

    // clear the last selected alphabet highlight

    const currentAlphabet = getElementTextById('current-alphabet')
    // console.log(currentAlphabet)
    removeBackgroundColorById(currentAlphabet)
}