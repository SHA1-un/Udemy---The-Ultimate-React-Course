import { useState, useEffect } from "react";

export default function ProgressBar({max}) {
    const [remainingTime, setRemainingTime] = useState(max);
      useEffect(() => {
        const intervalID = setInterval(() => {
          setRemainingTime(prevValue => prevValue - 10)
        }, 10);
    
        return () => clearInterval(intervalID);
      }, []);
    return <progress value={remainingTime} max={max} />
}