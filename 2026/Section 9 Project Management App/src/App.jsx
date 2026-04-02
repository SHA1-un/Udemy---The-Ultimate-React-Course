import Sidebar from "./components/Sidebar";
import Project from "./components/Project";
import { useState } from "react";
import { projects as sampleProjects } from './data/sampleProjects';

function App() {
  const [projects, setProjects] = useState(sampleProjects);
  const [selectedProject, setSelectedProject] = useState(null);

  function handleSave(_project) {
    setProjects(prevProjects => {
      // Create a deep copy of the projects
      const updatedProjects = prevProjects.map(prevProject => {
        return {
          ...prevProject,
          tasks: [...prevProject.tasks]
        }
      });
      
      // Check if project exists 
      const existingProject = projects.find(current_project => current_project.id === _project.id);
      if (existingProject) { 
        // Update existing entry
      } else {
        updatedProjects.push(_project);
      }

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
      <Project onSave={handleSave} selectedProject={selectedProject}></Project>

    </main>
  );
}

export default App;
