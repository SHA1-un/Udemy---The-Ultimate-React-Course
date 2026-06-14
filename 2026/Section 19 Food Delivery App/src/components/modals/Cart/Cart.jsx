import useCart from "../../../hooks/useCart";
import CartItem from "./CartItem";

export default function Cart({ handleShowCheckout, handleClose }) {
    const { items, cartTotal } = useCart();

    return <form >
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
            <button className="text-button" type="button" onClick={handleClose}>Close</button>
            <button className="button" type="button" onClick={handleShowCheckout}>Go to Checkout</button>
        </div>
    </form>
}