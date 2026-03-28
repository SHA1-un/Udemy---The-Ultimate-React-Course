import { useRef, useState } from "react"
import ResultModal from "./ResultModal";

const INTERVAL = 50;
export default function TimerChallenge({ title, targetTime }) {
    const timerRef = useRef();
    const modalRef = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime);
    const isRunning = timeRemaining * 1000 > 0 && timeRemaining * 1000 < targetTime * 1000;

    console.log(`isRunning: ${isRunning}`);
    console.log(`targetTimeMs: ${targetTime * 1000}`);
    console.log(`timeRemainingMs: ${timeRemaining * 1000}`);
    const toggleTimer = () => isRunning ? stopTimer() : startTimer();

    function startTimer() {
        timerRef.current = setInterval(() => {
            setTimeRemaining(prevValue => {
                const ms = prevValue * 1000;
                const updatedTimeRemaining = ms - INTERVAL;

                if (updatedTimeRemaining <= 0) stopTimer();

                return updatedTimeRemaining / 1000;
            });
        }, INTERVAL);
    }

    function stopTimer() {
        clearTimeout(timerRef.current);
        modalRef.current.open();
    }

    function resetTimer() {
        setTimeRemaining(targetTime);
    }

    return <>
        <ResultModal ref={modalRef} targetTime={targetTime} timeRemaining={timeRemaining} onClose={resetTimer} />
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