import { useContext } from "react";
import { CartContext } from "../../store/cart-context";
import { formatter } from "../../utils/currencyUtil";

export default function FoodCard({ foodItem }) {
    const { addItem } = useContext(CartContext);
    return <li className="meal-item">
        <article>
            <img src={`http://localhost:3000/${foodItem.image}`} />
            <h3>{foodItem.name}</h3>
            <section>
                <p className="meal-item-price">{formatter.format(foodItem.price)}</p>
                <p className="meal-item-description">{foodItem.description}</p>
                <div className="meal-item-actions">
                    <button className="button" onClick={() => addItem(foodItem)}>Add to Cart</button>
                </div>
            </section>
        </article>
    </li>
}