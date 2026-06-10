import Input from "../Input";

export default function Checkout({ cartTotal }) {
    return <div >
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
    </div>
}