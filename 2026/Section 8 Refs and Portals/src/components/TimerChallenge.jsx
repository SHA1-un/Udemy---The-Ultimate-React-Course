import { useRef, useState } from "react"
import ResultModal from "./ResultModal";

const INTERVAL = 10;
export default function TimerChallenge({ title, targetTime }) {
    const timerRef = useRef();
    const modalRef = useRef();
    const targetTimeMs = targetTime * 1000;

    const [timeRemaining, setTimeRemaining] = useState(targetTimeMs);
    const isRunning = timeRemaining > 0 &&  timeRemaining !== targetTimeMs;

    const toggleTimer = () => isRunning ? stopTimer() : startTimer();

    function startTimer() {
        // every 10ms, we will decrease the target time by 10ms 
        timerRef.current = setInterval(() => {
            setTimeRemaining(prevValue => {
                const updatedTimeRemaining = prevValue - INTERVAL;

                if (updatedTimeRemaining <= 0) {
                    // trigger reset
                    modalRef.current.open();
                    stopTimer()
                }
                return updatedTimeRemaining;
            });
        }, INTERVAL);

        // setIsRunning(true);
    }

    function stopTimer() {
        clearTimeout(timerRef.current);
    }

    return <>
        <ResultModal ref={modalRef} targetTime={targetTime} result={"You Lost"} />
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