import { useRef, useState } from "react"

export default function TimerChallenge({ title, targetTime }) {
    const [isRunning, setIsRunning] = useState(false);
    const [hasExpired, setHasExpired] = useState(false);
    const timerRef = useRef();

    const toggleTimer = () => isRunning ? stopTimer() : startTimer();

    function startTimer() {
        timerRef.current = setTimeout(() => {
            setHasExpired(true);
        }, targetTime * 1000);

        setIsRunning(true);
    }

    function stopTimer() {
        clearTimeout(timerRef.current);
        
    }

    return <section className="challenge">
        <h2>{title}</h2>
        {hasExpired && <p>you lose...</p>}
        <p className="challenge-time">{targetTime} Second {targetTime > 1 ? "s" : ""}</p>
        <button onClick={toggleTimer}>
            {isRunning ? "Stop" : "Start"} Challenge
        </button>
        <p className={isRunning ? "active" : ""}>
            {isRunning ? "Timer is running..." : "Timer inactive"}
        </p>
    </section>
}