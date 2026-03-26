import {useImperativeHandle} from "react";

// note that we don't HAVE to name the property "ref" - this prop can have any name
export default function ResultModal({ ref, targetTime, onClose }) {
    // TODO Add changes necessary for implementing a clean exposed API and copy over the implementation to notes
    useImperativeHandle(ref, () => {}, []);

    return <dialog ref={ref} className="result-modal">
        <h2>result</h2>
        <p>The target time was <strong>{targetTime} second{targetTime > 1 ? "s" : ""}</strong></p>
        <p>You stopped the timer with <strong>x seconds left</strong></p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
}