import { useImperativeHandle, useRef } from "react";

import Input from "./UI/Input";

export default function EditProjectDialog({ ref, projectID, handleSave, handleCancel }) {
    const dialogRef = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();

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
        const title = titleRef.current.getValue();
        const description = descriptionRef.current.getValue();
        const dueDate = dateRef.current.getValue();

        handleSave(projectID, {title, description, dueDate});
    }

    return <>
        <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            <form className="mt-4 text-right" method="dialog" onSubmit={() => {}}>
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className="text-stone-800 hover:text-stone-950">Cancel</button>
                    </li>
                    <li>
                        <button onClick={onSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                    </li>
                </menu>
            </form>

            <div>
                <Input ref={titleRef} label="Title" />
                <Input ref={descriptionRef} label="Description" type="paragraph" />
                <Input ref={dateRef} label="Due Date" type="date" />
            </div>
        </dialog>
    </>
}

