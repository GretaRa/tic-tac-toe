//Module for game board
const gameBoard = (() => {
    //creates an array from all elements with class .box
    const gridItem = Array.from(document.querySelectorAll('.box'));

    let board;
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
            gridItem[index].textContent = mark;
            });
        
    };
    // const addMark = (mark) => {
    //     const gridItem = document.querySelectorAll('.box').forEach(gridItem => gridItem.addEventListener('click', () => {
    //         if (gridItem.innerHTML === ''){
    //             gridItem.textContent = mark ;
    //         } else {
    //             return;
    //         }
    //     }));
    // }

    return {
        init
        //rendergameBoard,
        //addMark
    }
})();
gameBoard.init();
//gameBoard.rendergameBoard();
// gameBoard.addMark('X');


const displayController = (() => {

    // Clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that congratulates the winning player!
    
})();

//Factory function for creating players
// const Player = (name, mark) => {
//     return{
//         name,mark
//     }
// };

// const playerOne = Player('Player O','O');
// const playerTwo = Player('Player X','X');
// console.log(playerOne.mark);
// console.log(playerTwo.mark);

//player o
//mark = o
//human?/pc
//player x
//mark = x
//human?/pc

