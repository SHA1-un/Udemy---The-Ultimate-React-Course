import { useEffect, useState } from "react"

export default function ProgressBar({ activeQuestionIndex, maxTime }) {
    const [currentValue, setCurrentValue] = useState(maxTime);

    // Wrap setInterval side effect in useEffect because we want it to run ONLY once on 
    // mount and then also cleanup interval on dismount
    useEffect(() => {
        setCurrentValue(maxTime);

        const interval = setInterval(() => {
            setCurrentValue(prevValue => prevValue - 10);
        }, 10);

        return () => clearInterval(interval);
    }, [activeQuestionIndex]);
    return <>
        <progress value={currentValue} max={maxTime}></progress>
    </>
}