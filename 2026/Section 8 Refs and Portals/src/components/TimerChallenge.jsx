import { useRef, useState } from "react"
import ResultModal from "./ResultModal";

const INTERVAL = 50;
export default function TimerChallenge({ title, targetTime }) {
    const targetTimeMs = targetTime * 1000;

    const timerRef = useRef();
    const modalRef = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTimeMs);
    const isRunning = timeRemaining > 0 && timeRemaining < targetTimeMs;

    if (timeRemaining * 1000 <= 0) stopTimer();

    const toggleTimer = () => isRunning ? stopTimer() : startTimer();

    function startTimer() {
        timerRef.current = setInterval(() => {
            setTimeRemaining(prevValue => {
                const updatedTimeRemaining = prevValue - INTERVAL;

                return updatedTimeRemaining;
            });
        }, INTERVAL);
    }

    function stopTimer() {
        clearTimeout(timerRef.current);
        modalRef.current.open();
    }

    function handleReset() {
        setTimeRemaining(targetTimeMs);
    }

    return <>
        <ResultModal ref={modalRef} targetTime={targetTime} timeRemaining={timeRemaining} onReset={handleReset} />
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">{targetTime} Second{targetTime > 1 ? "s" : ""}</p>
            <button onClick={toggleTimer}>
                {isRunning ? "Stop" : "Start"} Challenge
            </button>
            <p className={isRunning ? "active" : ""}>
                {isRunning ? "Timer is running..." : "Timer inactive"}
            </p>
        </section>
    </>
}