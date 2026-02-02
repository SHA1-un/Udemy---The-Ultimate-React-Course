import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard";

function getActivePlayer(logArray) {
  if (!logArray || logArray.length < 1) return "X";
  const lastLog = logArray[logArray.length-1];
  const previousPlayer = Object.keys(lastLog)[0];
  return previousPlayer === "X" ? "O" : "X";
}

function App() {
  const [players, setPlayers] = useState({
    X: { name: "Player 1" },
    O: { name: "Player 2" },
  });
  // const [boardState, setBoardState] = useState(DEFAULT_BOARD_STATE);
  const [log, setLog] = useState([]);
  const activePlayer = getActivePlayer(log);

  function handlePlayerNameChange(playerSymbol, newName) {
    // Common pattern in react for when you need to update a state variable that relies on the previous value.
    setPlayers((oldPlayers) => {
      const newPlayers = { ...oldPlayers }; // Copy old object

      newPlayers[playerSymbol].name = newName; // Mutate property

      return newPlayers; // Return updated object
    });
  }

  function onMove(row, col) {
    setLog(oldLog => {
      const newLog = [...oldLog];
      newLog.push({ [activePlayer]: [row, col] });

      return newLog;
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player playerName={players["X"].name} playerSymbol="X" onSave={handlePlayerNameChange} isActive={activePlayer === "X"}></Player>
          <Player playerName={players["O"].name} playerSymbol="O" onSave={handlePlayerNameChange} isActive={activePlayer === "O"}></Player>
        </ol>

        <GameBoard log={log} onMove={onMove}></GameBoard>
      </div>

      LOG
    </main>
  )
}

export default App
