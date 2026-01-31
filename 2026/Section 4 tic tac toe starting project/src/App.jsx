import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard";

const DEFAULT_BOARD_STATE = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const [boardState, setBoardState] = useState(DEFAULT_BOARD_STATE);

  function handlePlayerNameChange(playerSymbol, newName) {
    // Common pattern in react for when you need to update a state variable that relies on the previous value.
    setPlayers((oldPlayers) => {
      const newPlayers = { ...oldPlayers }; // Copy old object

      newPlayers[playerSymbol] = newName; // Mutate property

      return newPlayers; // Return updated object
    });
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player playerName={players["X"]} playerSymbol="X" onSave={handlePlayerNameChange}></Player>
          <Player playerName={players["O"]} playerSymbol="O" onSave={handlePlayerNameChange}></Player>
        </ol>

        <GameBoard boardState={boardState}></GameBoard>
      </div>

      LOG
    </main>
  )
}

export default App
