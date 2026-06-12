import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    items: [],
    addItem: () => { },
    removeItem: () => { },
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

    function removeItem(cartItem) {
        setCart(prevCart => {
            let updatedCart = [...prevCart];
            const cartItemIndex = updatedCart.findIndex(item => item.id === cartItem.id);

            if (cartItemIndex < 0) return prevCart;
            
            // Update exsisting item
            const updatedCount = updatedCart[cartItemIndex].count - 1;

            if (updatedCount < 1) { // remove item
                updatedCart.splice(cartItemIndex, 1);
            } else { // decrease count
                updatedCart[cartItemIndex] = {
                    ...updatedCart[cartItemIndex],
                    count: updatedCart[cartItemIndex].count - 1
                }
            }

            return updatedCart
        })
    }

    useEffect(() => {
        localStorage.setItem("user-cart", JSON.stringify(cart));
    }, [cart]);

    const cartCtx = {
        items: cart,
        addItem,
        removeItem
    };

    return <CartContext value={cartCtx}>
        {children}
    </CartContext>
}