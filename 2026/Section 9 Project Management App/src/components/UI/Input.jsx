export default function Input({ label, type }) {
    const defaultClass = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
    const defaultType = "text"
    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
            {type === "paragraph" ?
                <textarea className={defaultClass} type="text" /> :
                <input className={defaultClass} type="text" />
            }
        </p>
    )
}