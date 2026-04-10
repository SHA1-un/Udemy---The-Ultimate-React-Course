import Sidebar from "./components/Sidebar";
import ProjectOverview from "./components/ProjectOverview";
import { useState } from "react";
import { projects as sampleProjects } from './data/sampleProjects';
import { createNewProject } from "./utils/project_utils";

function getSelectedProject(projects, projectID) {
  return projects.find(project => project.id === projectID);
}
function App() {
  const [projects, setProjects] = useState(sampleProjects);
  const [selectedProjectID, setSelectedProjectID] = useState(null);
  const selectedProject = getSelectedProject(projects, selectedProjectID);

  function handleSave(projectID, options) {
    const { title, description, dueDate, tasks } = options;

    if (!projectID) {
      // === NEW PROJECT ===
      const newProject = createNewProject(); // Generate ID here, synchronously

      const projectToSave = {
        ...newProject,
        title: title || newProject.title,
        description: description || newProject.description,
        dueDate: dueDate || newProject.dueDate,
        tasks: tasks ? [...tasks] : newProject.tasks,
        isDraft: false,
      };

      setProjects((prev) => [...prev, projectToSave]);
      setSelectedProjectID(projectToSave.id); // Safe — we have the ID right here

      return; // Early return for clarity
    }

    // === EXISTING PROJECT ===
    setProjects((prevProjects) =>
      prevProjects.map((prevProject) =>
        prevProject.id === projectID
          ? {
            ...prevProject,
            title: title || prevProject.title,
            description: description || prevProject.description,
            dueDate: dueDate || prevProject.dueDate,
            tasks: tasks ? [...tasks] : prevProject.tasks,
            isDraft: false,
          }
          : prevProject
      )
    );

    setSelectedProjectID(projectID);
  }

  function deleteProject(projectID) {
    setProjects(prevProjects =>
      prevProjects.filter(project => project.id !== projectID)
    );
    setSelectedProjectID(null);
  }

  function deleteTask(taskID) {
    setProjects(prevProjects => {
      // Create a deep copy of the projects
      const updatedProjects = prevProjects.map(prevProject => {
        return {
          ...prevProject,
          tasks: [...prevProject.tasks.filter(task => task.id !== taskID)]
        }
      });

      return updatedProjects;
    });
  }

  function handleProjectSelect(project) {
    setSelectedProjectID(prevProjectID => {
      if (project.id === prevProjectID) return null;

      return project.id;
    });
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar projects={projects} selectedProject={selectedProject} handleProjectSelect={handleProjectSelect} onSave={handleSave}></Sidebar>
      <ProjectOverview onSave={handleSave} onDeleteProject={deleteProject} onDeleteTask={deleteTask} selectedProject={selectedProject}></ProjectOverview>
    </main>
  );
}

export default App;