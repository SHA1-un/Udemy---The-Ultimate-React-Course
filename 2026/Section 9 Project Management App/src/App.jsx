import Sidebar from "./components/Sidebar";
import Project from "./components/Project";
import { useState } from "react";
import { projects as sampleProjects } from './data/sampleProjects';

function App() {
  const [projects, setProjects] = useState(sampleProjects);

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar projects={projects}></Sidebar>
      <Project></Project>

    </main>
  );
}

export default App;
