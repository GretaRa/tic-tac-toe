//Module for game board
const gameBoard = (() => {
    const gameBoard = ['X', 'O', 'X'];
    
    const rendergameBoard = () => {
        
        
    };
    const addMark = (mark) => {
        const gridItem = document.querySelectorAll('.box').forEach(gridItem => gridItem.addEventListener('click', () => {
            if (gridItem.innerHTML === ''){
                gridItem.textContent = mark ;
            } else {
                return;
            }
        }));
    }

    return {
        rendergameBoard,
        addMark
    }
})();
gameBoard.rendergameBoard();
gameBoard.addMark('X');


const displayController = (() => {

    // Clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that congratulates the winning player!
    
})();

//Factory function for creating players
const Player = (name) => {

};


