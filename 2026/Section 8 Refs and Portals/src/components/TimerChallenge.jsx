import { useRef, useState } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
    const [isRunning, setIsRunning] = useState(false);
    const [hasExpired, setHasExpired] = useState(false);
    const timerRef = useRef();
    const modalRef = useRef();

    const toggleTimer = () => isRunning ? stopTimer() : startTimer();

    function startTimer() {
        timerRef.current = setTimeout(() => {
            setHasExpired(true);
            modalRef.current.open();
        }, targetTime * 1000);

        setIsRunning(true);
    }

    function stopTimer() {
        clearTimeout(timerRef.current);
        setIsRunning(false)
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