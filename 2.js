//////////////// ADD MESASGES TO DIV
// var inputelm = document.getElementById("input");
// var buttonelm = document.getElementById("btn");
// var showelm = document.getElementById("show");

// buttonelm.onclick = function() {
//     var inputval = inputelm.value;
//     if (inputval != "") {
//         showelm.innerHTML += inputval+"<br>";
//         inputelm.value = "";
//     };
    
// };

/////////////////// CHANGE DIV COLOR 
// var btnElm = document.querySelector(".btn");
// var mydiv = document.querySelector(".mydiv");
// colors = ['red', 'green', 'blue', 'yellow', 'black']
// var i = 0;

// btnElm.onclick = function() {
//     mydiv.style.backgroundColor = colors[i <= colors.length - 1 ? i : 0];
//     i ++;
//     if (i == colors.length) {
//         i = 0;
//     };
// }

//////////////////SHOW AND HIDE PASSOWRD
// var input = document.getElementById("pw");
// var btn = document.getElementById('btn');

// btn.addEventListener('click', togglePassword);

// function togglePassword(){
//     if (this.getAttribute('data_text') == 'show') {
//         this.setAttribute('data_text','hide');
//         input.setAttribute('type', 'text');
//         this.innerHTML = 'Hide';
//     }
//     else {
//         this.setAttribute('data_text','show');
//         input.setAttribute('type', 'password');
//         this.innerHTML = 'Show';

//     }
// }

// var elm = document.getElementById('img');
// var i = 1;
// elm.setAttribute('src', 'images/'+i+'.PNG');
// myInterval = setInterval(function(){
//     elm.setAttribute('src', 'images/'+i+'.PNG');
//     i ++;
//     if (i == 7){
//         i = 1;
//     };
// }, 1500);
// elm.setInterval = myInterval;


// let imgElm = document.getElementById('img');
// let images = ['images/1.PNG', 'images/2.PNG', 'images/3.PNG', 'images/4.PNG', 'images/5.PNG', 'images/6.PNG'];
// let i = 0;
// function slideShow() {
//     if (i > images.length-1){
//         i = 0;
//     };
//     imgElm.setAttribute('src',images[i]);
//     i ++;
//     setTimeout(function(){
//         slideShow();
//     },1350);
// };
// slideShow();

// let btnElm = document.getElementById('btn');
// btnElm.addEventListener('click',changeBg);

// function changeBg() {
//     document.body.style.backgroundColor = 'rgb'+'('+(Math.trunc(Math.random()*255))+','+(Math.trunc(Math.random()*255))+','+(Math.trunc(Math.random()*255))+')';
// }

// let rows = document.getElementById('rows');
// let cols = document.getElementById('cols');
// let mybtn = document.getElementById('btn');

// mybtn.addEventListener('click', createTable)

// function createTable() {
//     let table = document.createElement('table'); 
//     document.body.appendChild(table)
//     for (let i = 0; i < +rows.value; i++) {
//         let tr = document.createElement('tr');
//         table.appendChild(tr)
    
//     for (let j = 0; j < +cols.value; j++) {
//         let td = document.createElement('td')
//         let text = document.createTextNode("data show")
//         td.appendChild(text)
//         tr.appendChild(td)
//     };
//     };
// }
// function clock() {
    

// var time = new Date();
// var timenow = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',second: 'numeric', hour12: true });

//     document.getElementById('clock').innerHTML = timenow 
//     setTimeout(function(){
//         clock(), 1000
//     })
// }
// clock();

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

