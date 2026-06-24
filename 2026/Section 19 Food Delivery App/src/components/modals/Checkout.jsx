import { useActionState, useEffect } from "react";
import useCart from "../../hooks/useCart";
import Input from "../Input";

export default function Checkout({ handleClose }) {
    const { cartTotal, submitOrder } = useCart();
    const defaultFormData = {
        name: "",
        email: "",
        street: "",
        "postal-code": "",
        city: ""
    }

    const [formState, formAction, isPending] = useActionState(async (prevState, formData) => {
        // Submit order
        const result = await submitOrder(formData);

        if (!result.success) {
            return { success: false, error: result.message, formData: Object.fromEntries(formData) };
        }

        return { success: true, error: null, formData: defaultFormData };
    }, { success: false, error: null, formData: defaultFormData });

    useEffect(() => {
        if (formState.success) {
            handleClose();
        }
    }
    , [formState.success, handleClose]);

    console.log(`Form state: ${JSON.stringify(formState, null, 2)}`);

    return <form action={formAction}>
        <h2>Checkout</h2>
        <p>Total Amount: ${cartTotal}</p>
        <div className="control-row">
            <Input
                id={"name"}
                label={"Full Name"}
                defaultValue={formState.formData.name}
            />
        </div>
        <div className="control-row">
            <Input
                id={"email"}
                label={"Email"}
                defaultValue={formState.formData.email}
            />
        </div>
        <div className="control-row">
            <Input
                id={"street"}
                label={"Street"}
                defaultValue={formState.formData.street}
            />
        </div>
        <div className="control-row">
            <Input
                id={"postal-code"}
                label={"Postal Code"}
                defaultValue={formState.formData["postal-code"]}
            />
            <Input
                id={"city"}
                label={"City"}
                defaultValue={formState.formData.city}
            />
        </div>

        <div className="modal-actions">
            <button className="text-button" type="button" onClick={handleClose}>Close</button>
            <button className="button" type="submit" disabled={isPending}>Submit Order</button>
        </div>
    </form>
}