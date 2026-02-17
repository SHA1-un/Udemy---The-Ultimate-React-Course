import { useState } from "react";

export default function InputField({name, title, onChange}) {
    const [userInput, setUserInput] = useState(0);

    function handleInput(event) {
        const input = event.target.value;
        setUserInput(input);
    }
    
    return <span>
        <label>{title}</label>
        <input type="number" onChange={handleInput}  />
    </span>
}