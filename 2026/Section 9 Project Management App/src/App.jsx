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
    setProjects(prevProjects => {
      // Create a deep copy of the projects
      const updatedProjects = prevProjects.map(prevProject => {
        return {
          ...prevProject,
          tasks: [...prevProject.tasks]
        }
      });

      // Check if project exists 
      const existingProject = projects.find(current_project => current_project.id === projectID);
      const _project = existingProject ?? createNewProject();
      if (title) _project.title = title;
      if (description) _project.description = description;
      if (dueDate) _project.dueDate = dueDate;
      if (tasks) _project.tasks = [...tasks];
      _project.isDraft = false;
      if (!existingProject) updatedProjects.push(_project);

      return updatedProjects;
    })
  }

  function deleteProject(projectID) {
    setProjects(prevProjects =>
      prevProjects.filter(project => project.id !== projectID)
    );
    setSelectedProjectID(null);
  }

  function deleteTask(projectID, taskID) {
    setProjects(prevProjects => {
      console.log(prevProjects)
      // Create a deep copy of the projects
      const updatedProjects = prevProjects.map(prevProject => {
        return {
          ...prevProject,
          tasks: [...prevProject.tasks.filter(task => task.id !== taskID)]
        }
      });

      console.log(updatedProjects)

      return updatedProjects;
    });
  }

  function handleProjectSelect(project) {
    console.log(project)
    setSelectedProjectID(prevProjectID => {
      if (project.id === prevProjectID) return null;

      return project.id;
    });
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar projects={projects} selectedProject={selectedProject} handleProjectSelect={handleProjectSelect}></Sidebar>
      <ProjectOverview onSave={handleSave} onDeleteProject={deleteProject} onDeleteTask={deleteTask} selectedProject={selectedProject}></ProjectOverview>

    </main>
  );
}

export default App;
