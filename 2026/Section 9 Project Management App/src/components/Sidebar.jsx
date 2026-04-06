/**
 * The Sidebar will be used to display a 
 * 1. list of all projects - clicking on an item will show the project on the right half of the app
 * 2. Adding a project will create a new project on the right side that he user can edit
 */

export default function Sidebar({ projects, selectedProjectID, handleProjectSelect }) {
    return <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">+ Add Project</button>

        <ul className="mt-8">
            {projects.map((project) => {
                const isSelected = selectedProjectID === project.id;
                let buttonClass = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
                if(isSelected) buttonClass += " text-stone-200 bg-stone-800";
                return <li key={project.id} >
                    <button onClick={() => handleProjectSelect(project)} className={buttonClass}>
                        {project.title}
                    </button>
                </li>
            })}
        </ul>
    </aside>
}