import { useContext } from "react";
import { CartContext } from "../store/cart-context";

export default function useCart() {
  const context = useContext(CartContext);

  async function submitOrder(formData) {
    const { items, cartTotal } = context;
    const data = Object.fromEntries(formData);
    data.items = [...items];
    data.cartTotal = cartTotal;

    // Submit order 
    const response = await fetch(`http://localhost:3000/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return;
    }

  }

  return { ...context, submitOrder };
}
