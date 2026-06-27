import { Link } from "react-router-dom";

const PRODUCTS = [
    { id: "product-1", name: "Product 1" },
    { id: "product-2", name: "Product 2" },
    { id: "product-3", name: "Product 3" },
];

export default function Products() {
    return <>
        <h1>Products</h1>
        <ul>
            {PRODUCTS.map((product) => {
                return <li key={product.id}>
                    <Link to={`/products/${product.id}`}> {product.name}</Link>
                </li>
            })}
        </ul>

    </>

}