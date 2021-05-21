'use strict'
console.log('hello')

var win = '😄'
var lost = '😒'
var flag = '🚩'
var mine = '💣'

var gTimer = 0;
var gcellsMinesAroundCount = 0;

// This is an object by which the 
// board size is set (in this case: 
// 4x4 board and how many mines 
// to put)

var gLevel = {
    size: 4,
    mines: 2,
};

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
};


// gBoard – A Matrix  containing cell objects
// model
var gBoard = {
    cell: {
        minesAroundCount: 4,
        isShown: true,
        isMine: false,
        isMarked: true

    }
};

function init() {
    gBoard = buildBoard()
    renderBoard(gBoard)
    gGame.isOn = true
}



function buildBoard() {
    var minesAround = setMinesNegsCount()
    var board = [];
    for (var i = 0; i < gLevel.size; i++) {
        board[i] = [];
        for (var j = 0; j < gLevel.size; j++) {
            var piece = mine
            board[i][j] = piece;
        }
        return board
    }
    // console.table(board)
}


function renderBoard(board) {
    var strHTML = '';
    for (var i = 0; i < board.length; i++) {
        var row = board[i];
        strHTML += '<tr>';
        for (var j = 0; j < row.length; j++) {
            var cell = row[j];
            var tdId = `cell-${i}-${j}`;
            strHtml += `<td id="${tdId}" onclick="cellClicked(this)" oncontextmenu = "cellmarked(this)">
            ${cell}
            isShown = true;
            if mine
            </td>`

        }
        strHTML += '</tr>';
    }
    var elboard = document.querySelector('.board');
        elboard.innerHTML = strHtml;
}


 

function setMinesNegsCount(){
    gcellsMinesAroundCount++
    isShown = true
}



// To Do: if cell is clicked....
// Called when a cell (td) is
// clicked
function cellClicked(elCell) {
    startTimer()
    isShown = false;
    if (elCell.innerText === Number) {
        elCell.innerText = block;
        // elCell.classlist.contains()
    }
    var clickedNum = +elCell.innerText
}


// Called on right click to mark a
// cell (suspected to be a mine)
// Search the web (and 
// implement) how to hide the 
// context menu on right click

function cellMarked(elCell)




function random_location() {
    return {
        lon: Math.floor(Math.random() * 360) - 179,
        lat: Math.floor(Math.random() * 181) - 90
    }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



function gameOver() {
    console.log('Game Over');
    gGame.isOn = false;
    clearInterval(gIntervalGhosts)
    document.querySelector('.modal').style.display = 'block'
}


//             When user clicks a cell with no
// mines around, we need to open
// not only that cell, but also its
// neighbors.
// NOTE: start with a basic
// implementation that only opens
// the non-mine 1
// st degree
// neighbors


function expandShown(board, elCell, i, j) {
    for (var d = 0; d < squareMat.length; d++) {
        var item = squareMat[d][d];
        for (var d = 0; d < squareMat.length; d++) {
            var item1 = squareMat[d][squareMat.length - d - 1
                
            }
    }
}

function startTimer() {
    var elTimer = document.querySelector('.timer')
    setInterval(function () {
        gTimer += 0.001
        elTimer.innerText = gTimer.toFixed(3)
    }, 1)

}



























// gGameInterval = setInterval(somefunction, 15000)




// checkGameOver()



// setTimeout(() => {
//     $(that).select();
// }, 0);













