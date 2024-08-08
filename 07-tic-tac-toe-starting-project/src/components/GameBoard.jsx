import { useState } from "react"

export default function GameBoard({onSelectSquare, board}) {

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard) => { 
    //       const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; // copy of the old initialGameBoard - we do this to prevent bugs or side effects of mutability (this concept is called immutable - not changing the original state of a variable; Arrays by default are mutable)
    //       updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //       return updatedBoard;
    //     });

    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                <ol>
                    {row.map((activePlayerSymbol, colIndex) => (
                        <li key={colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={activePlayerSymbol !==null}>{activePlayerSymbol}</button>
                        </li>
                    ))}
                </ol>
                </li>
            ))}
        </ol>
    )
}