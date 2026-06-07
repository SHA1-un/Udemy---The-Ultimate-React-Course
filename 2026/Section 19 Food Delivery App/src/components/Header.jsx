import { useContext } from "react";
import headerImage from "../assets/logo.jpg";
import { CartContext } from "../store/cart-context";

export default function Header() {
    const { items } = useContext(CartContext);
    return <div id="main-header">
        <h1 id="title">
            <img src={headerImage} alt="" />
            ReactFood
        </h1>
        <button className="text-button">
            {`Cart (${items.length})`}
        </button>
    </div>
}