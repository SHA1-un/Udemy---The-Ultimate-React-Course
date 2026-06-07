export default function CartItem({item}) {
    return <li className="cart-item">
        <p>{item.name}</p>
        <div className="cart-item-actions">
            <button>-</button>
            <p>{item.count}</p>
            <button>+</button>
        </div>
    </li>
}