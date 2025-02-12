import GameBoard from "./Components/GameBoard.jsx";
import Player from "./Components/Player.jsx";
import { useState } from "react";
import Log from "./Components/Log.jsx";
import { winning_Combinations } from "./Winning_Combinations.js";
import GameOver from "./Components/GameOver.jsx";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const PLAYER_NAMES = {
  X: "Player1",
  O: "Player2",
};
function deriveActivePlayer(gameturns) {
  let currentPlayer = "X";
  if (gameturns.length > 0 && gameturns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function setGameBoard(gameturns) {
  let gameBoard = [...initialGameBoard.map((innerArray) => [...innerArray])];

  for (const turn of gameturns) {
    const { Index, player } = turn;
    const { row, col } = Index;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function deeriveWinner(gameBoard, players) {
  let winner;
  for (const combination of winning_Combinations) {
    const firstSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdSymbol = gameBoard[combination[2].row][combination[2].col];

    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    ) {
      winner = players[firstSymbol];
    }
  }
  return winner;
}

function App() {
  const [gameturns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYER_NAMES);

  const gameBoard = setGameBoard(gameturns);

  const winner = deeriveWinner(gameBoard, players);
  const hasDraw = gameturns.length === 9;

  const activeplayer = deriveActivePlayer(gameturns);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((turns) => {
      const currentPlayer = deriveActivePlayer(turns);
      const updatedTurns = [
        { Index: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...turns,
      ];
      return updatedTurns;
    });
  }

  function handlePlayerName(symbol, name) {
    setPlayers((previousPlayers) => {
      return {
        ...previousPlayers,
        [symbol]: name,
      };
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={PLAYER_NAMES.X}
            symbol="X"
            onChangeName={handlePlayerName}
            isActive={activeplayer === "X"}
          />
          <Player
            name={PLAYER_NAMES.O}
            symbol="O"
            onChangeName={handlePlayerName}
            isActive={activeplayer === "O"}
          />
        </ol>
        <GameBoard OnSelect={handleSelectSquare} board={gameBoard} />
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
      </div>
      <Log turns={gameturns} />
    </main>
  );
}

export default App;
