/**
 * This component will be used for both displaying existing projects as well as creating new projects
 * 
 */

import noProjectsImage from '../assets/no-projects.png';
import Dialog from './UI/Dialog';
import EditProject from "./EditProject";
import ProjectDetails from "./ProjectDetails";
import { useState } from "react";

export default function ProjectOverview({ selectedProject, onSave }) {
    const [editProject, setEditProject] = useState(false);

    const isProjectSelected = !!selectedProject;

    function saveAndReset(projectID, title, description, dueDate, tasks) {
        onSave(projectID, {title, description, dueDate, tasks});
        setEditProject(false);
    }

    return (
        <>
            {/* <Dialog ref={newProjectDialog} message="Testing message"></Dialog> */}
            {!isProjectSelected && !editProject ? (<div className="mt-24 text-center w-2/3">
                <img className="w-16 h-16 object-contain mx-auto" src={noProjectsImage} alt="" />
                <h2 className="text-xl font-bold text-stone-500 my-4">
                    No Project Selected
                </h2>
                <p className="text-stone-400 mb-4">Select a project or create a new one</p>
                <button onClick={() => setEditProject(true)} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
                    Create New Project
                </button>
            </div>) : null}

            {editProject ?
                <EditProject project={selectedProject} handleSave={saveAndReset} /> :
                null
            }

            {isProjectSelected && !editProject ? <ProjectDetails project={selectedProject} onSave={onSave}/> : null}
        </>

    );
}



