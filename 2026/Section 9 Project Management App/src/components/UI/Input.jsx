import { useState } from "react";

export default function Input({ id, label, type = "text", customClass, value, onChange }) {
    const defaultClass = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
    const className = customClass || defaultClass;

    // Use the value from props directly
    const elementProps = {
        className,
        value,
        onChange: (e) => onChange(id, e.target.value) // Pass value up to parent
    };

    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
            {type === "paragraph" ?
                <textarea {...elementProps} /> :
                <input type={type} {...elementProps} />
            }
        </p>
    )
}