import { createPortal } from "react-dom";
import { useContext, useImperativeHandle, useRef } from "react";

import CartItem from "./CartItem";
import { CartContext } from "../../../store/cart-context";

export default function CartModal({ ref }) {
    const dialogRef = useRef();
    const { items } = useContext(CartContext);
    
    const cartTotal = items.reduce((prevValue, item) => {
        return prevValue + item.count * item.price;
    }, 0);

    useImperativeHandle(ref, () => {
        return {
            open
        }
    }, []);

    function open() {
        dialogRef.current.showModal();
    }

    return createPortal(<dialog ref={dialogRef} className="modal" >
        <div className="cart">
            <h2>Your Cart</h2>
            <ul>
                {items.map((item) => {
                    return <CartItem item={item} key={item.id} />
                })}
            </ul>
            <p className="cart-total">${cartTotal}</p>

        </div>

        <div className="modal-actions">
            <form method="dialog">
                <button className="text-button">Close</button>
                <button className="button" type="button">Go to Checkout</button>
            </form>
        </div>
    </dialog>,
        document.getElementById("modal"));
}