import { createPortal } from "react-dom";
import { useImperativeHandle, useRef } from "react";
import Cart from "./Cart/Cart";

export default function Modal({ ref }) {
    const dialogRef = useRef();

    useImperativeHandle(ref, () => {
        return {
            open
        }
    }, []);

    function open() {
        dialogRef.current.showModal();
    }

    return createPortal(
            <dialog ref={dialogRef} className="modal" >
                <Cart/>
            </dialog>,
            document.getElementById("modal"));
    }