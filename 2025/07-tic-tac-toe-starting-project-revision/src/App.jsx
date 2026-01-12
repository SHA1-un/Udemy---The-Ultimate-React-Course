import { useState } from "react";

import { GameBoard } from "./components/GameBoard";
import { Player } from "./components/Player";
import { GameOver } from "./components/GameOver";
import { Log } from "./components/Log";

import { hasGameEnded } from "./utils/gameUtils";
/**
 * What should this app do?
 * 1. it should allow the user to play a game of tic-tac-toe
 * 
 * What are the different components?
 * 1. Game board
 * 2. Component to keep track of the players name and their symbol - I guess the symbol is their identifier? 
 *  2.1. In traditional Tic-Tac-Toe, the first player is always X.
 * 3. We also want to keep a log with all the moves made by the players
 * 
 * 
 *  
 */

const initialGameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
function App() {
  // const [activePlayer, setActivePlayer] = useState("X"); // will only be x or o
  // const [boardState, setBoardState] = useState(initialGameBoard);
  // const [endGame, setEndGame] = useState({
  //   isGameOver: false,
  //   isDraw: false,
  //   winner: null
  // });
  // const [playerNames, setPlayerNames] = useState({
  //   X: "Player 1",
  //   O: "Player 2",
  // });
  // const [log, setLog] = useState([]);

  // TODO: Refactor to make use of single gameState
  const [gameState, setGameState] = useState({
    activePlayer: 'X',
    boardState: initialGameBoard,
    endGame: {
      isGameOver: false,
      isDraw: false,
      winner: null,
    },
    playerNames: {
      X: "Player 1",
      O: "Player 2",
    },
    log: [],
  });

  const updateBoardState = (row, col) => {
    // Prevent player from choosing a square that already has a symbol in it.
    if (boardState[row][col] !== "") return;

    setBoardState(prev => {
      const updatedBoardState = {...prev};
      const activePlayername = updatedBoardState.playerNames[updatedBoardState.activePlayer];

      updatedBoardState.boardState[row][col] = updatedBoardState.activePlayer;

      const { isGameOver, isDraw } = hasGameEnded(updatedBoardState.boardState);
      if (isGameOver) {
        updatedBoardState.endgame = {
          isGameOver,
          isDraw,
          winner: !isDraw ? activePlayername : null
        };
      } else {
        const nextPlayer = updatedBoardState.activePlayer === 'X' ? "O" : "X";
        updatedBoardState.activePlayer = nextPlayer;
      }

      updatedBoardState.log.push(`${activePlayername}: ${row},${col}`);

      return updatedBoardState;
    })
  }

  const resetBoard = () => {
    setGameState({
      activePlayer: 'X',
      boardState: initialGameBoard,
      endGame: { isGameOver: false, isDraw: false, winner: null },
      playerNames: { X: "Player 1", O: "Player 2" },
      log: [],
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <li className={getPlayerClass("X", gameState.activePlayer)}>
            <Player playerName={playerNames["X"]} symbol="X" onNameChange={setPlayerNames} />
          </li>
          <li className={getPlayerClass("O", gameState.activePlayer)}>
            <Player playerName={playerNames["O"]} symbol="O" onNameChange={setPlayerNames} />
          </li>
        </ol>
        <GameBoard boardState={boardState} onMove={updateBoardState} />
        {endGame.isGameOver ? <GameOver winner={endGame.winner} isDraw={endGame.isDraw} onRematch={resetBoard} /> : null}
      </div>

      <Log log={log} />
    </main>
  );
}

function getPlayerClass(player, activePlayer) {
  return player === activePlayer ? 'active' : null;
}

export default App
