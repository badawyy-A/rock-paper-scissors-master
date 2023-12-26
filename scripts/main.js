let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
const scissor = document.querySelector('.container .game-options .row .scissor');
const spock = document.querySelector('.container .game-options .row .spock');
const paper = document.querySelector('.container .game-options .row .paper');
const lizard = document.querySelector('.container .game-options .row .lizard');
const rock = document.querySelector('.container .game-options .row .rock');
const scoreDisplay = document.querySelector('.container .score-box .result')
scoreDisplay.textContent = score;
const gameOptions = document.querySelector('.container .game-options')
const gamee = document.querySelector('.container .game')
const playAgainBtn = document.querySelector('.container .game button')
const row = document.querySelector('.container .game .row')
const resultT = document.querySelector('.container .game h3')



let count = 0



scissor.addEventListener('click', () => {
    game(scissor);
});
spock.addEventListener('click', () => {
    game(spock);
});
paper.addEventListener('click', () => {
    game(paper);
});
lizard.addEventListener('click', () => {
    game(lizard);
});
rock.addEventListener('click', () => {
    game(rock);
});


    playAgainBtn.addEventListener('click',()=>{
        window.location.reload();
    })


function game(playerMove) {

    const computerMove = computerChoice();
    let result = '';

    if (playerMove === scissor) {
        if (computerMove === spock || computerMove === rock) {
            result = 'YOU LOSE';
        } else if (computerMove === paper || computerMove === lizard) {
            result = 'YOU WIN';
        } else if (computerMove === scissor) {
            result = 'TIE';
        }
    }

    if (playerMove === spock) {
        if (computerMove === lizard || computerMove === paper) {
            result = 'YOU LOSE';
        } else if (computerMove === scissor || computerMove === rock) {
            result = 'YOU WIN';
        } else if (computerMove === spock) {
            result = 'TIE';
        }
    }

    if (playerMove === paper) {
        if (computerMove === lizard || computerMove === scissor) {
            result = 'YOU LOSE';
        } else if (computerMove === spock || computerMove === rock) {
            result = 'YOU WIN';
        } else if (computerMove === paper) {
            result = 'TIE';
        }
    }

    if (playerMove === lizard) {
        if (computerMove === scissor || computerMove === rock) {
            result = 'YOU LOSE';
        } else if (computerMove === spock || computerMove === paper) {
            result = 'YOU WIN';
        } else if (computerMove === lizard) {
            result = 'TIE';
        }
    }

    if (playerMove === rock) {
        if (computerMove === paper || computerMove === spock) {
            result = 'YOU LOSE';
        } else if (computerMove === scissor || computerMove === lizard) {
            result = 'YOU WIN';
        } else if (computerMove === rock) {
            result = 'TIE';
        }
    }

    gameOptions.classList.add('game-hide')
    gamee.classList.add('d-block')

    const playerMoveCopy = playerMove.cloneNode(true);
    const computerMoveCopy = computerMove.cloneNode(true);

    row.appendChild(playerMoveCopy);
    row.appendChild(computerMoveCopy);

    resultT.innerText = `${result}`

    if(result === 'YOU WIN'){
        playerMoveCopy.classList.add('win')
    }else if (result === 'YOU LOSE'){
        computerMoveCopy.classList.add('win')
    }

    if(result === 'YOU WIN'){
        updateScoreAndStoreInLocalStorage()
    }
}

function updateScoreAndStoreInLocalStorage() {
    score += 1;
    scoreDisplay.textContent = score;
    localStorage.setItem('score', score);
}

function computerChoice() {
    const randomNumber = Math.random();
    let computerMove = null;

    if (randomNumber >= 0 && randomNumber < 1/5) {
        computerMove = scissor;
    } else if (randomNumber >= 1/5 && randomNumber < 2/5) {
        computerMove = spock;
    } else if (randomNumber >= 2/5 && randomNumber < 3/5) {
        computerMove = paper;
    } else if (randomNumber >= 3/5 && randomNumber < 4/5) {
        computerMove = lizard;
    } else if (randomNumber >= 4/5 && randomNumber <= 1) {
        computerMove = rock;
    }

    return computerMove;
}


// rules

const rulesBtn = document.querySelector('.container .rules-button button')
const rules = document.querySelector('.rule')
const closeBtn = document.querySelector('.rule .close')

rulesBtn.addEventListener('click',()=>{
    rules.classList.remove('d-none')
})

closeBtn.addEventListener('click',()=>{
    rules.classList.add('d-none')
})