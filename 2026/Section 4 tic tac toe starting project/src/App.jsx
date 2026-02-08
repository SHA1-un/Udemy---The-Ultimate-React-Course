/**
 * Note: one core issue I've noticed is that there is a race condition where the app does not register that a player has won
 * and allows the next player to make a move if they are quick enough. I'm not sure if this is due to my implementation
 * or a limiting factor due to the tools I currently have at my disposal.
 * 
 * In retrospect: there is a lot wrong with this implementation - it's not bad, but I think there are a few patterns I could improve on. Ideally I would have liked to consolidate most if not all of the states
 * to a single game state for easy state management. But I'm not prepared to redo most of the assignment and what I have does function for purpose of this section. 
 */

import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard";
import GameLog from "./components/GameLog";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const INITIAL_PLAYER_STATE = {
  X: "Player 1",
  O: "Player 2",
};

const INITIAL_PLAY_STATE = {
  gameOver: false,
  /**@type {"draw" | "player_won"} */
  reason: null
}
function getActivePlayer(logArray) {
  if (!logArray || logArray.length < 1) return "X";
  const lastLog = logArray[logArray.length - 1];
  return lastLog.symbol === "X" ? "O" : "X";
}

function getPrevPlayerName(logArray, players) {
  const logLength = logArray.length;
  if (logLength < 2) return "";
  const prevPlayerSymbol = logArray[logLength - 1].symbol;

  return players[prevPlayerSymbol];
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

/**
 * 
 * @param {any[][]} currentBoardState 
 * @returns 
 */
function isDraw(currentBoardState) {
  const flattenedBoard = currentBoardState.reduce((flattenedArray, rowArray) => {
    flattenedArray.push(...rowArray)
    return flattenedArray;
  }, []);

  return flattenedBoard.every(symbol => symbol != null);
}

function App() {
  const [players, setPlayers] = useState(INITIAL_PLAYER_STATE);
  const [log, setLog] = useState([]);
  const [playState, setPlayState] = useState(INITIAL_PLAY_STATE);
  const activePlayer = getActivePlayer(log);

  function resetGame() {
    setPlayers(INITIAL_PLAYER_STATE);
    setLog([]);
    setPlayState(INITIAL_PLAY_STATE);
  }

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
      setPlayState({
        gameOver: true,
        reason: "player_won"
      });
    } else if (isDraw(tempGameBoard)) {
      setPlayState({
        gameOver: true,
        reason: "draw"
      });
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
        {playState.gameOver && <dialog id="game-over">
          <h2>Game Over!</h2>
          {playState.reason === "player_won" ? <p>{getPrevPlayerName(log, players)} has won!</p> : <p>Draw!</p>}
          <button onClick={resetGame}>Restart</button>
        </dialog>}
      </section>

      <GameLog log={log} players={players}></GameLog>
    </main>
  )
}

export default App
