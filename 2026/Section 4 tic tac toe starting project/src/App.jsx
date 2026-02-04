import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard";

function getActivePlayer(logArray) {
  if (!logArray || logArray.length < 1) return "X";
  const lastLog = logArray[logArray.length-1];
  return lastLog.symbol === "X" ? "O" : "X";
}

function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2" ,
  });
  const [log, setLog] = useState([]);
  const activePlayer = getActivePlayer(log);

  function handlePlayerNameChange(playerSymbol, newName) {
    // Common pattern in react for when you need to update a state variable that relies on the previous value.
    setPlayers((oldPlayers) => {
      const newPlayers = { ...oldPlayers }; // Copy old object

      newPlayers[playerSymbol] = newName; // Mutate property

      return newPlayers; // Return updated object
    });
  }

  function onMove(row, col) {
    setLog(oldLog => {
      const newLog = [...oldLog];
      // Important to note: we cant use the state variable activePlayer` here since it's state might already be stale when this state update gets scheduled
      // It's therefore best practice to NEVER reference other state varibles inside a state setting function
      // Derive all values from the old state value that get sent to the function.   
      const symbol = getActivePlayer(oldLog); 
      newLog.push({
        symbol,
        move: [row, col]
      });

      return newLog;
    })
  }

  return (
    <main>
      <section id="game-container">
        <ol id="players">
          <Player playerName={players["X"]} playerSymbol="X" onSave={handlePlayerNameChange} isActive={activePlayer === "X"}></Player>
          <Player playerName={players["O"]} playerSymbol="O" onSave={handlePlayerNameChange} isActive={activePlayer === "O"}></Player>
        </ol>

        <GameBoard log={log} onMove={onMove}></GameBoard>
      </section>

      <section id="log">
        <ol>
          {log.map(entry => {
            const row = entry.move[0];
            const col = entry.move[1];
            return <li>
              {`${players[entry.symbol]}: (${row+1}, ${col+1})`}
            </li>
          })}
        </ol>

      </section>
    </main>
  )
}

export default App
