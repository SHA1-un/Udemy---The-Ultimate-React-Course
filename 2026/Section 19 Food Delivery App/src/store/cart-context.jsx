import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    items: [],
    addItem: () => { },
    removeItem: () => { },
    submitOrder: () => { }
});

export default function CartContextProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const localCart = localStorage.getItem("user-cart");
        return localCart ? JSON.parse(localCart) : [];
    });

    function addItem(newItem) {
        setCart(prevCart => {
            const updatedCart = [...prevCart];
            const cartItemIndex = updatedCart.findIndex(item => item.id === newItem.id);

            // Update exsisting item
            if (cartItemIndex >= 0) {
                updatedCart[cartItemIndex] = {
                    ...updatedCart[cartItemIndex],
                    count: updatedCart[cartItemIndex].count + 1
                }
            } else { // Add new item
                updatedCart.push({
                    ...newItem,
                    count: 1
                });
            }

            return updatedCart
        })
    }

    useEffect(() => {
        localStorage.setItem("user-cart", JSON.stringify(cart));
    }, [cart]);

    const cartCtx = {
        items: cart,
        addItem
    };

    return <CartContext value={cartCtx}>
        {children}
    </CartContext>
}