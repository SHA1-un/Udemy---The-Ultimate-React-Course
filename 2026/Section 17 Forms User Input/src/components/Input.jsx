import { useCallback, useImperativeHandle, useState } from "react"

export default function Input({ ref, inputType, inputName, validationFn, invalidMessage, props }) {
    const [userInput, setUserInput] = useState("");
    const [hasEdited, setHasEdited] = useState(false);

    // not sure about this... but going to try is anyway
    useImperativeHandle(ref, () => {
        getValue
    }, [getValue]);

    const getValue = useCallback(() => { userInput }, [userInput]);

    // Only do validation if we have a validation function
    let isValid = true;
    if (validationFn) {
        isValid = hasEdited ? validationFn(userInput) : true;
    }

    function handleInput(value) {
        setUserInput(value);
    }

    function handleInputBlur() {
        setHasEdited(true);
    }

    return <div className="control no-margin">
        <label htmlFor={inputType}>Email</label>
        <input
            id={inputName}
            type={inputType}
            name={inputName}
            onChange={(event) => handleInput(event.target.value)}
            onBlur={() => handleInputBlur()}
            value={userInput.email}
            {...props}
        />
        {validationFn && <div className="control-error">{!isValid && <p>{invalidMessage}</p>}</div>}
    </div>
}