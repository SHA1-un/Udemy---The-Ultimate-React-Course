import { useState } from "react";
import { UserInput } from "../components/UserInput";

export function InputForm() {
    // const [inputValues, setInputValues] = useState({
    //     initial_investment: 0,
    //     annual_investment: 0,
    //     expected_return: 0,
    //     duration: 0,
    // });

    function handleInputChange(event, inputType) {
        
    }

    return (
        <form id="user-input">
            <span className="input-group">
                <UserInput label={"Initial Investment"} defaultValue={0} onChange={(event) => {
                    handleInputChange(event, "initial_investment")
                }} />
                <UserInput label={"Annual Investment"} defaultValue={0} onChange={(event) => {
                    handleInputChange(event, "annual_investment")
                }} />
            </span>
            <br />
            <span className="input-group">
                <UserInput label={"Expected Return"} defaultValue={0} onChange={(event) => {
                    handleInputChange(event, "expected_return")
                }} />
                <UserInput label={"Duration"} defaultValue={0} onChange={(event) => {
                    handleInputChange(event, "duration")
                }} />
            </span>
        </form>
    );
}