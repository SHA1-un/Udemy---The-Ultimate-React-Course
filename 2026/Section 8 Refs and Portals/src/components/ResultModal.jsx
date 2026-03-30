import { useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom'

/**
 *  In this results modal component we accept a forwarded ref property called `ref`, although in 
 *  React 19+ you can name it what ever you want and passed as a param to the component. In previous React
 *  versions you have to make use of `forwardRef` wrapper function. 
 * 
 *  The result modal also does not expose the full API of the dialog HTML element, but rather only exposes
 *  what's necessary to the consumer. In this instance - a single open method.
 * 
 * */
export default function ResultModal({ ref, targetTime, timeRemaining, onReset }) {
    const dialogRef = useRef();
    const targetTimeMs = targetTime * 1000;
    const userLost = timeRemaining >= targetTimeMs;
    const timeRemainingSeconds = timeRemaining > 0 ? timeRemaining / 1000 : 0;
    const score = Math.round((1 - timeRemaining / targetTimeMs) * 100);

    useImperativeHandle(ref, () => {
        // If you want to expose the full native DOM API you can merge the internal ref with your custom methods
        // return { ...(dialogRef ?? {}), open }
        return { open };
    }, []);

    function open() {
        dialogRef.current.showModal();
    }

    return createPortal(<dialog ref={dialogRef} className="result-modal" onClose={onReset}>
        <h2>{!userLost ? `Your Score: ${score}` : "You Lose!"}</h2>
        <p>The target time was <strong>{targetTime} second{targetTime > 1 ? "s" : ""}</strong></p>
        <p>You stopped the timer with <strong>{(timeRemainingSeconds).toFixed(2)} seconds left</strong></p>
        <form method="dialog" onSubmit={onReset}>
            <button >Close</button>
        </form>
    </dialog>, document.getElementById("modal"));
}