import { useRef, useState } from "react";

export default function Player() {
  const playerInput = useRef();
  
  const [playerName, setPlayerName] = useState(null)

  function saveName() {
    if (!playerInput?.current?.value) return;

    setPlayerName(playerInput.current.value)
  }
  
  return (
    <section id="player">
      <h2>Welcome {playerName ?? "Unknown Entity"}</h2>
      <p>
        <input ref={playerInput} type="text" />
        <button onClick={saveName}>Set Name</button>
      </p>
    </section>
  );
}
