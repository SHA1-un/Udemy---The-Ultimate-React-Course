import { useImperativeHandle, useRef } from "react";

/**
 *  In this results modal component we accept a forwarded ref property called `ref`, although in 
 *  React 19+ you can name it what ever you want and passed as a param to the component. In previous React
 *  versions you have to make use of `forwardRef` wrapper function. 
 * 
 *  The result modal also does not expose the full API of the dialog HTML element, but rather only exposes
 *  what's necessary to the consumer. In this instance - a single open method.
 * 
 * */
export default function ResultModal({ ref, targetTime, timeRemaining, onClose }) {
    const dialogRef = useRef();
    const result = timeRemaining > 0 && targetTime <= targetTime ? "You Won!" : "You Lose!";

    useImperativeHandle(ref, () => {
        // If you want to expose the full native DOM API you can merge the internal ref with your custom methods
        // return { ...(dialogRef ?? {}), open }
        return { open };
    }, []);

    function open() {
        dialogRef.current.showModal();
    }

    return <dialog ref={dialogRef} className="result-modal">
        <h2>{result}</h2>
        <p>The target time was <strong>{targetTime} second{targetTime > 1 ? "s" : ""}</strong></p>
        <p>You stopped the timer with <strong>{timeRemaining.toFixed(2)} seconds left</strong></p>
        <form method="dialog">
            <button onClick={onClose}>Close</button>
        </form>
    </dialog>
}