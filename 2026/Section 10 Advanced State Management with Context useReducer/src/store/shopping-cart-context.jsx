import { useReducer, createContext } from "react";

import { DUMMY_PRODUCTS } from "../dummy-products";
export const CartContext = createContext({
    items: {},
    addItemToCart: () => { },
    updateItemQuantity: () => { }
});

function shoppingCartReducer(state, action) {
    const updatedItems = [...state.items];
    switch (action.type) {
        case "ADD_ITEM":
            const existingCartItemIndex = updatedItems.findIndex(
                (cartItem) => cartItem.id === action.payload
            );
            const existingCartItem = updatedItems[existingCartItemIndex];

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity + 1,
                };
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
                updatedItems.push({
                    id: action.payload,
                    name: product.title,
                    price: product.price,
                    quantity: 1,
                });
            }

            return {
                ...state, // Not needed here, but necessary when working with more complex state
                items: updatedItems,
            };
        case "UPDATE_ITEM":
            const productID = action.payload.id;
            const amount = action.payload.amount;
            const updatedItemIndex = updatedItems.findIndex(
                (item) => item.id === productID
            );

            const updatedItem = {
                ...updatedItems[updatedItemIndex],
            };

            updatedItem.quantity += amount;

            if (updatedItem.quantity <= 0) {
                updatedItems.splice(updatedItemIndex, 1);
            } else {
                updatedItems[updatedItemIndex] = updatedItem;
            }

            return {
                ...state, // Not needed here, but necessary when working with more complex state
                items: updatedItems,
            };
        default: break;
    }
}

export default function CartContextProvider({ children }) {
    const [shoppingCart, shoppingCartDispatch] = useReducer(shoppingCartReducer, { items: [] })

    function handleAddItemToCart(id) {
        shoppingCartDispatch({
            type: 'ADD_ITEM',
            payload: id
        });
    }

    function handleUpdateCartItemQuantity(id, amount) {
        shoppingCartDispatch({
            type: 'UPDATE_ITEM',
            payload: { id, amount }
        });
    }

    const cartCtx = {
        items: shoppingCart.items,
        addItemToCart: handleAddItemToCart,
        updateItemQuantity: handleUpdateCartItemQuantity
    }

    return (
        <CartContext value={cartCtx}>
            {children}
        </CartContext>
    );
}