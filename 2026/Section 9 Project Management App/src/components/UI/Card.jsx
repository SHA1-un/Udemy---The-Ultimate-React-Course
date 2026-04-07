export default function Card({ id, title, onClear}) {
    return <li key={id} className="flex justify-between my-4">
        <p>{title}</p>
        <button onClick={onClear} className="text-stone-700 hover:text-red-500">Clear</button>
    </li>
}