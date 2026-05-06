import { useEffect, useState } from "react"

export default function QuestionTimer({ maxTime, handleSelectAnswer }) {
    const [currentValue, setCurrentValue] = useState(maxTime);

    // Wrap setInterval side effect in useEffect because we want it to run ONLY once on 
    // mount and then also cleanup interval on dismount
    useEffect(() => {
        setCurrentValue(maxTime);

        const interval = setInterval(() => {
            setCurrentValue(prevValue => prevValue - 10);
        }, 10);

        return () => clearInterval(interval);
    }, [maxTime]);

    useEffect(() => {
        let timeout;
        if (maxTime === 15000) {
            timeout = setTimeout(() => {
                handleSelectAnswer(null); // user took too long to select answer
            }, maxTime);
        }

        return () => { if (timeout) clearTimeout(timeout) };
    }, [handleSelectAnswer, maxTime]);

    return <progress id="question-time" value={currentValue} max={maxTime}></progress>
}