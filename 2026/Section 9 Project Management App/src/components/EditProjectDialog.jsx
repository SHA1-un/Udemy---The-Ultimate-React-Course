import { useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";

import Input from "./UI/Input";

export default function EditProjectDialog({ ref, project, handleSave }) {
    const dialogRef = useRef();
    const [draftProject, setDraftProject] = useState({
        title: project?.title ?? "",
        description: project?.description ?? "",
        dueDate: project?.dueDate ?? "",
    });

    // Expose custom API method `open`
    useImperativeHandle(ref, () => {
        return {
            open
        }
    }, []);

    function open() {
        dialogRef.current.showModal();
    }

    function onSave() {
        console.log("here")
        handleSave(project?.id, { title: draftProject.title, description: draftProject.description, dueDate: draftProject.dueDate });
    }

    function handleInput(key, value) {
        setDraftProject(prevDraftProject => {
            const updatedDraftProject = { ...prevDraftProject };
            updatedDraftProject[key] = value;
            return updatedDraftProject
        })
    }

    return createPortal(<>
        <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            <form className="mt-4 text-right" method="dialog" onSubmit={() => { }}>
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className="text-stone-800 hover:text-stone-950">Cancel</button>
                    </li>
                    <li>
                        <button onClick={onSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                    </li>
                </menu>
            </form>

            <div className="w-[35rem] mt-16">
                <Input id="title" label="Title" value={draftProject.title} onChange={handleInput} />
                <Input id="description" label="Description" value={draftProject.description} onChange={handleInput} type="paragraph" />
                <Input id="dueDate" label="Due Date" value={draftProject.dueDate} onChange={handleInput} type="date" />
            </div>
        </dialog>
    </>, document.getElementById("modal-root"))
}

