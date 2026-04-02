/**
 * This component will be used for both displaying existing projects as well as creating new projects
 * 
 */

import noProjectsImage from '../assets/no-projects.png';

export default function Project({ selectedProject, onSave }) {
    const isProjectSelected = !!selectedProject;
    const isNewProject = isProjectSelected ? selectedProject.isNew : false;

    return (
        <div className="mt-24 text-center w-2/3">
            <img className="w-16 h-16 object-contain mx-auto" src={noProjectsImage} alt="" />
            <h2 className="text-xl font-bold text-stone-500 my-4">
                No Project Selected
            </h2>
            <p className="text-stone-400 mb-4">Select a project or create a new one</p>
            <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
                Create New Project
            </button>

        </div>
    );
}

function createNewProject() {
    return {
        id: crypto.randomUUID(),
        title: "",
        description: "",
        dueDate: new Date(),
        tasks: [],
    }
}

function createTask() {
    // { id: crypto.randomUUID(), title: "Audit current brand assets" },
    //             { id: crypto.randomUUID(), title: "Design three logo concepts" },
    //             { id: crypto.randomUUID(), title: "Finalize style guide documentation" },
}