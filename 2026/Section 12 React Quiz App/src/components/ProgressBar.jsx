import { useEffect, useState } from "react"

export default function ProgressBar({ maxTime, onTimeout}) {
    const [currentValue, setCurrentValue] = useState(maxTime);

    // Wrap setInterval side effect in useEffect because we want it to run ONLY once on 
    // mount and then also cleaup interval on dismount
    useEffect(() => {
        console.log("useEffect ran")
        const interval = setInterval(() => {
            setCurrentValue(prevValue => prevValue - 10);
        }, 10);

        return () => clearInterval(interval);
    }, []);
    return <>
        <progress value={currentValue} max={maxTime}></progress>
    </>
}