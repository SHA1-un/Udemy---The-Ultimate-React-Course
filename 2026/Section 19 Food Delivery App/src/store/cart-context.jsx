import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    items: [],
    addItem: () => {},
    removeItem: () => {},
    submitOrder: () => {}
});

export default function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    function loadCart() {
        const userCart = localStorage.getItem("user-cart");

        setCart(userCart || []);
    }

    useEffect(() => { loadCart() }, []);

    const cartCtx = {
        items: cart
    };

    return <CartContext value={cartCtx}>
        {children}
    </CartContext>
}