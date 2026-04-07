import { useRef, useState } from "react";
import Input from "./UI/Input";
import Card from "./UI/Card";
import { createTask } from "../utils/project_utils";
export default function ProjectDetails({ project, onSave, onDeleteProject, onDeleteTask }) {
    const inputRef = useRef();

    // const [projectTasks, setProjectTasks] = useState(project.tasks);

    function onAddTask() {
        const taskTitle = inputRef.current.getValue();
        const newTask = createTask();
        newTask.title = taskTitle;
        onSave(project.id, { tasks: [...project.tasks, newTask] });
        inputRef.current.setValue("");
    }

    return <div >
        <div className="w-[35rem] mt-16">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                <button onClick={() => onDeleteProject(project.id)} className="text-stone-700 hover:text-red-500">Delete</button>
            </div>
            <p className="text-stone-400 mb-4">{project.dueDate}</p>
            <header className="pb-4 mb-4 border-b-2 border-stone-300">{project.description}</header>
        </div>
        <div>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <div className="flex items-center gap-4">
                <Input ref={inputRef} customClass="w-64 px-2 py-1 rounded-sm bg-stone-200" ></Input>
                <button onClick={onAddTask} className="text-stone-600 hover:text-stone-950">Add Task</button>
            </div>
            <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {project.tasks?.length ?
                    project.tasks.map((task) => {
                        return <Card id={task.id} title={task.title} onClear={() => onDeleteTask(project.id, task.id)} />
                    }) :
                    <p>No Tasks added yet</p>
                }
            </ul>
        </div>
    </div>
}