//Module for game board
const gameBoard = (() => {
    // Variables
    let turn = 'X';
    let board;
    let win;

    // DOM selection
    //creates an array from all elements with class .box
    const gridItems = Array.from(document.querySelectorAll('.box'));
    const messages = document.querySelector('.announcement');
    
    const init = () => {
        board = [
            '', '', '',
            '', '', '',
            '', '', ''
        ];
        rendergameBoard();
    };
    //render a mark in the same position in dom and within board array
    const rendergameBoard = () => {
        board.forEach((mark, index) => {
            gridItems[index].textContent = mark;
        });
        
        messages.textContent = win === 'T' ? `That's a tie!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
        
        if (messages.textContent === `That's a tie!` || messages.textContent === `${win} wins the game!`) document.getElementById('gameBoard').removeEventListener('click', handleTurn), document.getElementById('resetButton').style.transform = 'scale(2)';
    };

    const handleTurn = (event) => {
        let idx = gridItems.findIndex((gridItem) => {
            return gridItem === event.target;
        });
        if (event.target.textContent === ''){
            board[idx] = turn;
            turn = turn === 'X' ? 'O' : 'X';
        } else {
            return
        }
        win = getWinner();
        rendergameBoard();
    };

    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], 
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const getWinner = () => {
        let winner = null;
        winningCombos.forEach(function(combo, index) {
            if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
        });
        return winner ? winner : board.includes('') ? null : 'T';
    };

    const gameOver = () => {
        init();
        turn = 'X';
        messages.textContent = `It's ${turn}'s turn!`;
        document.getElementById('gameBoard').addEventListener('click', handleTurn);
        document.getElementById('resetButton').style.transform = 'scale(1)';
    };

    
    //Event listeners
    document.getElementById('gameBoard').addEventListener('click', handleTurn);
    document.getElementById('resetButton').addEventListener('click', gameOver);
     

    return {
        init
    }
})();
gameBoard.init();

const displayController = (() => {

    // Clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that congratulates the winning player!
    
})();

//Style
//add AI
//connect human/ai choices