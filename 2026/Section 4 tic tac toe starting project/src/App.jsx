/**
 * Note: one core issue I've noticed is that there is a race condition where the app does not register that a player has won
 * and allows the next player to make a move if they are quick enough. I'm not sure if this is due to my implementation
 * or a limiting factor due to the tools I currently have at my disposal.
 */

import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard";
import GameLog from "./components/GameLog";
import { WINNING_COMBINATIONS } from "./winning-combinations";

function getActivePlayer(logArray) {
  if (!logArray || logArray.length < 1) return "X";
  const lastLog = logArray[logArray.length - 1];
  return lastLog.symbol === "X" ? "O" : "X";
}

/**
 * 
 * @param {string[][]} currentBoardState 
 */
function hasGameEnded(currentBoardState) {
  for (const winCom of WINNING_COMBINATIONS) {
    let symbols = [];
    for (const winComElement of winCom) {
      symbols.push(currentBoardState[winComElement.row][winComElement.column]);
    } 
    const symbolString = symbols.join("");
    const hasGameEnded = symbolString === "XXX" || symbolString === "OOO";

    if (hasGameEnded) return true;
  }
}

function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const [log, setLog] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const activePlayer = getActivePlayer(log);

  function handlePlayerNameChange(playerSymbol, newName) {
    // Common pattern in react for when you need to update a state variable that relies on the previous value.
    setPlayers((oldPlayers) => {
      const newPlayers = { ...oldPlayers }; // Copy old object

      newPlayers[playerSymbol] = newName; // Mutate property

      return newPlayers; // Return updated object
    });
  }

  function onMove(currentGameBoard, row, col) {
    // Mock move;
    const tempGameBoard = currentGameBoard.map(row => [...row]);
    tempGameBoard[row][col] = activePlayer;
    if (hasGameEnded(tempGameBoard)) {
      setGameOver(true);
    }
    
    setLog(oldLog => {
      const newLog = [...oldLog];
      // Important to note: we cant use the state variable `activePlayer` here since it's state might already be stale when this state update gets scheduled
      // It's therefore best practice to NEVER reference other state varibles inside a state setting function
      // Derive all values from the old state value that get sent to the function.   
      const symbol = getActivePlayer(oldLog);
      newLog.push({
        symbol,
        move: [row, col]
      });

      return newLog;
    });

  }

  return (
    <main>
      <section id="game-container">
        <ol id="players" className="highlight-players">
          <Player playerName={players["X"]} playerSymbol="X" onSave={handlePlayerNameChange} isActive={activePlayer === "X"}></Player>
          <Player playerName={players["O"]} playerSymbol="O" onSave={handlePlayerNameChange} isActive={activePlayer === "O"}></Player>
        </ol>

        <GameBoard log={log} onMove={onMove}></GameBoard>
        {gameOver && <dialog id="game-over">
          <h2>Game Over!</h2>
          <p>Player "" has won!</p>
          <button>Restart</button>
        </dialog>}
      </section>

      <GameLog log={log} players={players}></GameLog>
    </main>
  )
}

export default App
