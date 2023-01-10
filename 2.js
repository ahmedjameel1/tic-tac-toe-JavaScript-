let combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const player1 = 'X'
const player2 = 'O'
let currPlayer = player1
let boxes = [];
for ( var i = 0; i < 9; i++) {
    boxes.push(document.getElementById(i))
}
let playerText = document.getElementById('playerText');
let restartBtn = document.getElementById('restartBtn');
let spaces = Array(9).fill('empty');

function startGmae() {
    for (box in boxes) {
        boxes[box].addEventListener('click', function(e) {
            if (e.target.innerHTML == ''){
                e.target.innerHTML = currPlayer;
                spaces[e.target.id] = e.target.innerHTML
                console.log(spaces)

                let isWin = checkWin();
                let isDraw = checkDraw();
                if (isDraw){
                    playerText.innerHTML = 'Draw!'
                    setTimeout(reset,1500)
                }
                else if (isWin){
                    playerText.innerHTML = currPlayer+' Wins!'
                    setTimeout(reset,1500)
                }         
                else{
                    currPlayer = currPlayer == player1 ? player2 : player1;
                    playerText.innerHTML = currPlayer+'\'s turn'
            }}
        })
    }
}

restartBtn.addEventListener('click', reset);

function reset() {
    for (box in boxes) {
        boxes[box].innerHTML = '';
    }
    playerText.innerHTML = 'Tic Tac Toe'
    currPlayer = player1;
    for (i in spaces) {
        spaces[i] = 'empty'
    }
    
}

let a = null;
let b = null;
let c = null;

function checkWin() {

    for (var i = 0; i<combinations.length; i++) {
        a = document.getElementById(combinations[i][0]).innerHTML 
        b = document.getElementById(combinations[i][1]).innerHTML
        c = document.getElementById(combinations[i][2]).innerHTML
    
        if (a == b && b == c && c == a && a != ''){
            return true;
        }
    }return false;
}

function checkDraw() {
    let space = spaces.includes('empty');
    let isWin = checkWin();
    if (space != true && isWin == false) {
        return true;
    }return false;
}

startGmae()

