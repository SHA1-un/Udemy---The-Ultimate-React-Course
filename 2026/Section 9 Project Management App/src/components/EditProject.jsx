// import { useState } from "react"

export default function EditProject({ project, handleSave }) {
    // I need to know if im creating a new project or if im viewing and adding tasks to an existing project
    // Fist let's focus on adding displaying the project details.
    // const [newProject, setNewProject] = useState();

    return <form method="dialog" className="mt-4 text-right">
        <button >Cancel</button>
        <button >Save</button>
        <input type="text" />
        <input type="text" />
        <input type="text" />
    </form>
}

