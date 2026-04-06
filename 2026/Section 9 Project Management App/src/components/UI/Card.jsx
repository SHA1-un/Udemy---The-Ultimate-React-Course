export default function Card({ key, title, onClear}) {
    return <li key={key} className="flex justify-between my-4">
        <p>{title}</p>
        <button onClick={onClear} className="text-stone-700 hover:text-red-500">Clear</button>
    </li>
}