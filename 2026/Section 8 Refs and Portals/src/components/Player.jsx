import { useRef, useState } from "react";
import TimerChallenge from "./TimerChallenge";

export default function Player() {
  const playerInput = useRef();

  const [playerName, setPlayerName] = useState(null)

  function saveName() {
    if (!playerInput?.current?.value) return;

    setPlayerName(playerInput.current.value)
  }

  return (
    <>
      <section id="player">
        <h2>Welcome {playerName ?? "Unknown Entity"}</h2>
        <p>
          <input ref={playerInput} type="text" />
          <button onClick={saveName}>Set Name</button>
        </p>
      </section>

      <section id="challenges">
        <TimerChallenge title={"EASY"} targetTime={1}/>
        <TimerChallenge title={"NOT EASY"} targetTime={5}/>
        <TimerChallenge title={"GETTING TOUGH"} targetTime={10}/>
        <TimerChallenge title={"PROS ONLY"} targetTime={15}/>
      </section>
    </>
  );
}