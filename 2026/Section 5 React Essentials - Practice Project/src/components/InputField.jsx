import { useState } from "react";

export default function InputField({name, title, onChange}) {
    // const [userInput, setUserInput] = useState(0);
    // onChange(name, value);

    // function handleInput(event) {
    //     const input = event.target.value;
    //     setValue(input);
    // }

    return <span>
        <label>{title}</label>
        <input type="number" />
    </span>
}