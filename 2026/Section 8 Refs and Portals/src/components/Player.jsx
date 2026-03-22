import { useRef, useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("Unknown entity")
  const editPlayerName = useRef(playerName);

  function handleNameChange(event) {
    editPlayerName.current = event.target.value;
  }

  function saveName() {
    if (!editPlayerName || !editPlayerName.current) return;
    
    setPlayerName(editPlayerName.current);
    editPlayerName.current = "";
  }
  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input type="text" onChange={handleNameChange} value={editPlayerName.current}/>
        <button onClick={saveName}>Set Name</button>
      </p>
    </section>
  );
}
