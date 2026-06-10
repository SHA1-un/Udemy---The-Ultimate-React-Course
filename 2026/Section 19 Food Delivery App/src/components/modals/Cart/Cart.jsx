import CartItem from "./CartItem";

export default function Cart({ items, cartTotal }) {
    return <div className="cart">
        <h2>Your Cart</h2>
        <ul>
            {items.map((item) => {
                return <CartItem item={item} key={item.id} />
            })}
        </ul>
        <p className="cart-total">${cartTotal}</p>
    </div>
}