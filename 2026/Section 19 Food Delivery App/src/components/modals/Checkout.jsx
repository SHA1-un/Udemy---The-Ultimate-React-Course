import { useActionState } from "react";
import useCart from "../../hooks/useCart";
import Input from "../Input";

// TODO:
// 1. debug issue where submit order does not get ant form data on useActionState


export default function Checkout({ handleClose }) {
    const { cartTotal, submitOrder } = useCart();
    const [formState, formAction, isPending] = useActionState((prevState, formData) => {
        // Validate input

        try {
            // Submit order
            submitOrder(formData);

            console.log("Success")
        } catch (error) {
            // Handle error
            console.log(`Error ${error}`);

            // Keep current form state
        }
    }, { success: false, error: null });

    return <form action={formAction}>
        <h2>Checkout</h2>
        <p>Total Amount: ${cartTotal}</p>
        <div className="control-row">
            <Input
                id={"name"}
                label={"Full Name"}
            />
        </div>
        <div className="control-row">
            <Input
                id={"email"}
                label={"Email"}
            />
        </div>
        <div className="control-row">
            <Input
                id={"street"}
                label={"Street"}
            />
        </div>
        <div className="control-row">
            <Input
                id={"postal-code"}
                label={"Postal Code"}
            />
            <Input
                id={"city"}
                label={"City"}
            />
        </div>

        <div className="modal-actions">
            <button className="text-button" type="button" onClick={handleClose}>Close</button>
            <button className="button" type="submit" disabled={isPending}>Submit Order</button>
        </div>
    </form>
}