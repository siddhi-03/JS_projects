let randomN = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('.guessSubmit');
const userInput = document.querySelector('#guessField');
const guesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');

const p = document.createElement('p');

let playGame = true;
let guessArr = [];
let guessCount = 1;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
//to check user input is num in our range or not
if(isNaN(guess)){
    alert('Please enter a valid number');
}
else if(guess<1){
    alert('Please enter a number greater than 1!');
}
else if(guess>100){
    alert('Please enter a number less than 100!');
}
else{
    guessArr.push(guess);
    if(guessCount===11){
       displayGuess(guess);
       displaymsg(`Game Over! The number was ${randomN}`);
       endGame();
    }
    else{
        displayGuess(guess);
        checkGuess(guess);
    }
}
}

function checkGuess(guess){
    //to check user input is num in our range or not
    if(guess===randomN){
        displaymsg(`Congratulations! You got it right!`);
        endGame();
    }
    else if(guess<randomN){
        displaymsg(`Too low! Try again!`);
    }
    else if(guess>randomN){
        displaymsg(`Too high! Try again!`);
    }
}


function displayGuess(guess){
    //to display guesses
    userInput.value='';
    guesses.innerHTML += `${guess} `;
    guessCount++;
    remaining.innerHTML=`${11 - guessCount} `;
}

function displaymsg(message){
    //to display msg
    lowOrHi.innerHTML=`<h2>${message}</h2>`;
} 

function endGame(){
 userInput.value='';
 userInput.setAttribute('disabled',''); 
 p.classList.add('button');
 p.innerHTML=`<h2 id ="restartGame">Start new game</h2>`;
 startOver.appendChild(p); 
 playGame=false;
 restartGame();
}
function restartGame(){
const newGame = document.querySelector('#restartGame');
newGame.addEventListener('click',function(e){
    randomN = parseInt(Math.random()*100 + 1);
    guessArr = [];
    guessCount = 1;
    guesses.innerHTML='';
    remaining.innerHTML=`${11 - guessCount} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame=true;
});
}

