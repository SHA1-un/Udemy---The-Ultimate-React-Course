import { useRef } from "react";
import { useImperativeHandle } from "react";

export default function Input({ ref, label, type }) {
    const inputRef = useRef();
    const defaultClass = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
    if (!type) type = "text";

    useImperativeHandle(ref, () => {
        return {
            getValue
        }
    }, []);

    function getValue() {
        return inputRef.current.value;
    }

    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
            {type === "paragraph" ?
                <textarea ref={inputRef} className={defaultClass} type={type} /> :
                <input ref={inputRef} className={defaultClass} type={type} />
            }
        </p>
    )
}