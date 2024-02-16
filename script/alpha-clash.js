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
    const playerPressed = event.key;
    console.log('player pressed',playerPressed)

    // get the expected to pressed
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet =currentAlphabet.toLowerCase()
    console.log(playerPressed,expectedAlphabet)

    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point')
    }else{
        console.log('you missed , you lost a life')
    }
}

 document.addEventListener('keyup',handlerKeyboardKeyUpEvent)


function continueGame(){
// generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('random alphabet is:',alphabet)

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText= alphabet

    setBackgroundById(alphabet)
}

function play(){
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}