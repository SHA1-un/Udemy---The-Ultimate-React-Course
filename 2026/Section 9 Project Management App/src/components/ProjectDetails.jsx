import { useRef } from "react";
import Input from "./UI/Input";

export default function ProjectDetails({ project }) {
    const inputRef = useRef();
    return <div >
        <div className="w-[35rem] mt-16">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                <button className="text-stone-700 hover:text-red-500">Delete</button>
            </div>
            <p className="text-stone-400 mb-4">{project.dueDate}</p>
            <header className="pb-4 mb-4 border-b-2 border-stone-300">{project.description}</header>
        </div>
        <div>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <Input ref={inputRef} customClass="w-64 px-2 py-1 rounded-sm bg-stone-200" ></Input>
        </div>

    </div>
}