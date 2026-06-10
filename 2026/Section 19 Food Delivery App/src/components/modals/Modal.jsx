import { createPortal } from "react-dom";
import { useImperativeHandle, useRef, useState, useContext } from "react";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout";
import { CartContext } from "../../store/cart-context";

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

    const { items } = useContext(CartContext);

    const cartTotal = items.reduce((prevValue, item) => {
        return prevValue + item.count * item.price;
    }, 0);

    const Component = showCheckout ? Checkout : Cart;

    return createPortal(
        <dialog ref={dialogRef} className="modal" >
            <form method="dialog" action="">
                <Component items={items} cartTotal={cartTotal} />

                <div className="modal-actions">
                    <button className="text-button" onClick={() => setShowCheckout(false)}>Close</button>
                    {!showCheckout && <button className="button" type="button" onClick={() => setShowCheckout(true)}>Go to Checkout</button>}
                    {showCheckout && <button className="button" type="submit">Submit Order</button>}
                </div>
            </form>
        </dialog >,
        document.getElementById("modal"));
}