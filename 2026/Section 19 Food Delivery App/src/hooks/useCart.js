import { useContext } from "react";
import { CartContext } from "../store/cart-context";

export default function useCart() {
  const context = useContext(CartContext);

  async function submitOrder(fromData) {
    const { items } = context;

    // Submit order
    console.log(`Submitting order: ${JSON.stringify(fromData, null, 2)}`);
  }

  return { ...context, submitOrder };
}
