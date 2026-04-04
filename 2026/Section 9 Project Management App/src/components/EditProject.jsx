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
            <form className="mt-4 text-left">
                <label className="text-sm font-bold uppercase text-stone-500">TEST</label>
                <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" type="text" />
            </form>
            <form className="mt-4 text-left">
                <label className="text-sm font-bold uppercase text-stone-500">TEST</label>
                <textarea type="text"  className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
            </form>
            <form className="mt-4 text-left">
                <label className="text-sm font-bold uppercase text-stone-500">TEST</label>
                <input type="date"  className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
            </form>
        </div>
        
        
        {/* <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" /> */}
    </div >

}

