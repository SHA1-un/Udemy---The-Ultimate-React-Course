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
    X: {name: "Player 1", isActive: true},
    O: {name: "Player 2", isActive: false},
  });
  const [boardState, setBoardState] = useState(DEFAULT_BOARD_STATE);

  function handlePlayerNameChange(playerSymbol, newName) {
    // Common pattern in react for when you need to update a state variable that relies on the previous value.
    setPlayers((oldPlayers) => {
      const newPlayers = { ...oldPlayers }; // Copy old object

      newPlayers[playerSymbol].name = newName; // Mutate property

      return newPlayers; // Return updated object
    });
  }

  function updateBoardState(row, col) {
    setBoardState(oldBoardState => {
      const newBoardState = [...oldBoardState];

      newBoardState[row][col] = "X";

      return newBoardState;
    })
  }
// Think about how we can set the board state once and derive other values from it - eg. if we have a log state variable we can derive the board state and active player from it, while also using it for the logs.

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player playerName={players["X"].name} playerSymbol="X" onSave={handlePlayerNameChange} isActive={players["X"].isActive}></Player>
          <Player playerName={players["O"].name} playerSymbol="O" onSave={handlePlayerNameChange} isActive={players["O"].isActive}></Player>
        </ol>

        <GameBoard boardState={boardState} onMove={updateBoardState}></GameBoard>
      </div>

      LOG
    </main>
  )
}

export default App
