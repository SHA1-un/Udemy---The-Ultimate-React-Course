import { createPortal } from "react-dom";
import { useImperativeHandle, useRef, useState } from "react";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout";

export default function Modal({ ref }) {
    const dialogRef = useRef();
    const [showCheckout, setShowCheckout] = useState(false);

    useImperativeHandle(ref, () => {
        return {
            open
        }
    }, []);

    function open() {
        dialogRef.current.showModal();
    }

    function close() {
        dialogRef.current.close();
        setShowCheckout(false);
    }

    return createPortal(
        <dialog ref={dialogRef} className="modal" >
            {showCheckout ? <Checkout handleClose={close}/> : <Cart handleClose={close} handleShowCheckout={() => setShowCheckout(true)} />}
        </dialog >,
        document.getElementById("modal"));
}