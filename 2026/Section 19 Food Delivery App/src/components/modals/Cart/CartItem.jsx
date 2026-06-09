import { useContext } from "react"
import { CartContext } from "../../../store/cart-context"

export default function CartItem({ item }) {
    const { addItem, removeItem } = useContext(CartContext);

    return <li className="cart-item">
        <p>{item.name}</p>
        <div className="cart-item-actions">
            <button onClick={() => removeItem(item)}>-</button>
            <p>{item.count}</p>
            <button onClick={() => addItem(item)}>+</button>
        </div>
    </li>
}