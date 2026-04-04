import Input from "./UI/Input"

// import { useState } from "react"

export default function EditProject({ project, handleSave }) {
    // I need to know if im creating a new project or if im viewing and adding tasks to an existing project
    // Fist let's focus on adding displaying the project details.
    // const [newProject, setNewProject] = useState();

    return <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li>
                <button className="text-stone-800 hover:text-stone-950">Cancel</button>
            </li>
            <li>
                <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
            </li>
        </menu>


        <div>
            <Input label="Title" />
            <Input label="Description" type="paragraph" />
            <Input label="Due Date" type="date"/>
        </div>


    </div >

}

