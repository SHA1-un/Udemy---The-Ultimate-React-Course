import { useImperativeHandle, useRef } from "react"

export default function Dialog({ ref, message, handleConfirm, handleCancel }) {
    const dialogRef = useRef();

    // Expose custom API method `open`
    useImperativeHandle(ref, () => {
        return {
            open
        }
    }, []);

    function open() {
        dialogRef.current.showModal();
    }

    return <>
        <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            <p>{message}</p>

            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleConfirm}>Confirm</button>
        </dialog>

    </>
}

