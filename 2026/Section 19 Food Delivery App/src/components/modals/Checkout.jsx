import { useActionState } from "react";
import useCart from "../../hooks/useCart";
import Input from "../Input";


export default function Checkout({ handleClose }) {
    const { items, cartTotal, submitOrder } = useCart();
    const [formState, formAction, isPending] = useActionState((prevState, formData) => {
        // Validate input

        try {
            // Submit order
            submitOrder(formData);
        } catch (error) {
            // Handle error

        }
    }, {});

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
                id={"postal"}
                label={"Postal Code"}
            />
            <Input
                id={"city"}
                label={"City"}
            />
        </div>

        <div className="modal-actions">
            <button className="text-button" type="button" onClick={handleClose}>Close</button>
            <button className="button" type="submit">Submit Order</button>
        </div>
    </form>
}