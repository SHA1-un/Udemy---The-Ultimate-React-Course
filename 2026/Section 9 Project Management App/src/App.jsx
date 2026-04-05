import Sidebar from "./components/Sidebar";
import ProjectOverview from "./components/ProjectOverview";
import { useState } from "react";
import { projects as sampleProjects } from './data/sampleProjects';
import { createNewProject } from "./utils/project_utils";

function App() {
  const [projects, setProjects] = useState(sampleProjects);
  const [selectedProject, setSelectedProject] = useState(null);

  function handleSave(projectID, title, description, dueDate) {
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
      _project.title = title;
      _project.description = description;
      _project.dueDate = dueDate;
      _project.isDraft = false;
      if (!existingProject) updatedProjects.push(_project);

      return updatedProjects;
    })
  }

  function handleProjectSelect(project) {
    setSelectedProject(prevProject => {
      if (prevProject && project.id === prevProject.id) return null;

      return project;
    })
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar projects={projects} selectedProject={selectedProject} handleProjectSelect={handleProjectSelect}></Sidebar>
      <ProjectOverview onSave={handleSave} selectedProject={selectedProject} handleProjectSelect={handleProjectSelect}></ProjectOverview>

    </main>
  );
}

export default App;
