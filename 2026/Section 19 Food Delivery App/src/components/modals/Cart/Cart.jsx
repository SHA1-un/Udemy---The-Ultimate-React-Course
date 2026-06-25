import useCart from "../../../hooks/useCart";
import CartItem from "./CartItem";
import { formatter } from "../../../utils/currencyUtil";

export default function Cart({ handleShowCheckout, handleClose }) {
    const { items, cartTotal } = useCart();

    const hasItems = !!items.length;

    return <form >
        <div className="cart">
            <h2>Your Cart</h2>
            {hasItems && <ul>
                {items.map((item) => {
                    return <CartItem item={item} key={item.id} />
                })}
            </ul>}
            {!hasItems && <p>Your cart is empty. Add some items to your cart!</p>}
            <p className="cart-total">{formatter.format(cartTotal)}</p>
        </div>

        <div className="modal-actions">
            <button className="text-button" type="button" onClick={handleClose}>Close</button>
            {hasItems && <button className="button" type="button" onClick={handleShowCheckout}>Go to Checkout</button>}
        </div>
    </form>
}