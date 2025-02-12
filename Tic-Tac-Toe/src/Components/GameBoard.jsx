import { useState } from "react";

export default function GameBoard({ OnSelect, board }) {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   function handleSquareClick(rowIndex, colIndex) {
  //     setGameBoard((previousGameBoard) => {
  //       const updatedGameBoard = [
  //         ...previousGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       updatedGameBoard[rowIndex][colIndex] = activPlayer;
  //       return updatedGameBoard;
  //     });

  //     OnSelect();
  //   }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => {
                    OnSelect(rowIndex, colIndex);
                  }}
                  disabled={playerSymbol != null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
