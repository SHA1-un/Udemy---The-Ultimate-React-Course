import { useContext } from "react";
import { CartContext } from "../store/cart-context";

export default function useCart() {
  const context = useContext(CartContext);

  async function submitOrder(formData) {
    const { items } = context;
    const customer = Object.fromEntries(formData);
    const payload = {
      order: {
        customer,
        items
      }
    }

    console.log(payload);

    // Submit order
    try {
      const response = await fetch(`http://localhost:3000/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      return { success: response.ok, message: response.message };
    } catch (error) {
      return { success: false, message: error };
    }
  }

  return { ...context, submitOrder };
}
