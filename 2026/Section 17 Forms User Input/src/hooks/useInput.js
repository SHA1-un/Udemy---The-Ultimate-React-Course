import { useState } from "react";

/**
 * The reason why we chose to abstract the state management logic to a React hook
 * was to illustrate the concept that for reusable components such as inputs, it's not 
 * enough to only create a reusable component, but it is often neccessary to consolidate the 
 * state management logic.
 */
export default function useInput(defaultValue) {
    const [input, setInput] = useState(defaultValue);
    const [edited, setEdited] = useState(false);

    function handleInputChange(value) {
        setInput(value);
    }

    function handleInputBlur() {
        setEdited(true);
    }

    return { value: input, setInput, edited, handleInputChange, handleInputBlur };
}