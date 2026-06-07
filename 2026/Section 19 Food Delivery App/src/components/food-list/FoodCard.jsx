export default function FoodCard({ foodItem }) {
    return <li className="meal-item">
        <article>
            <img src={`http://localhost:3000/${foodItem.image}`} />
            <h3>{foodItem.name}</h3>
            <section>
                <p className="meal-item-price">{foodItem.price}</p>
                <p className="meal-item-description">{foodItem.description}</p>
                <div className="meal-item-actions">
                    <button className="button" >Add to Cart</button>
                </div>
            </section>
        </article>
    </li>
}