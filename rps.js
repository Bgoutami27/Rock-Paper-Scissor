let score=JSON.parse(localStorage.getItem('score'));
if (score === null){
    score = {
        win:0,
        lose:0,
        tie:0,
        
    };
}
let computerMove="";
function pickcomputerMove(){
    const randomNumber = Math.random();
    console.log(randomNumber);
    
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove='rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove='paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove='scissor';
    }
    return computerMove;
}
let reset="";
function playGame(playMove){
    if(playMove === 'Rock'){
        if(computerMove === 'rock'){
            result='tie';
        }
        else if(computerMove === 'paper'){
            result='you lose';
        }
        else if(computerMove === 'scissor'){
            result='you win';
        }
    }
    if(playMove === 'Paper'){
        if(computerMove === 'rock'){
            result='you win';
        }
        else if(computerMove === 'paper'){
            result='tie';
        }
        else if(computerMove === 'scissor'){
            result='you lose';
        }
    }
    if(playMove === 'scissor'){
        if(computerMove === 'rock'){
            result='you lose';
        }
        else if(computerMove === 'paper'){
            result='you win';
        }
        else if(computerMove === 'scissor'){
            result='tie';
        }
    }
    if(result === 'you win' ){
        score.win += 1;
    }
    else if(result === 'you lose'){
        score.lose += 1;
    }
    else if(result === 'tie'){
        score.tie += 1;
    }
    updateScore();
    alert(`you picked ${playMove}..\ncomputer picked:${computerMove}.\n${result}`);
    localStorage.setItem('score',JSON.stringify(score));
}
// Reset button
document.getElementById("button4").onclick=function(){
    score.win=0;
    score.lose=0;
    score.tie=0;
    localStorage.removeItem('score');
    updateScore();
    delete updateScore1();
};

document.getElementById("button1").onclick=function(){
    console.log(pickcomputerMove());
    playGame(`Rock`);
    console.log(result);
};

document.getElementById("button2").onclick=function(){
    console.log(pickcomputerMove());
    playGame(`Paper`);
    console.log(result);
};
document.getElementById("button3").onclick=function(){
    console.log(pickcomputerMove());
    playGame(`scissor`);
    console.log(result);
};
function updateScore(){
document.querySelector('.js-score').innerHTML=`Win:${score.win},Lose:${score.lose},Tie:${score.tie}`;}
