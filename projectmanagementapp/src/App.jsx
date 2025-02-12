
import './App.css'
import { useState } from 'react';
import NewProject from './components/NewProject'
import NoProjectView from './components/NoProjectView';
import ProjectSideBar from './components/ProjectSideBar'

function App() {

  const [projectState,setProjectState] = useState({
    selectedProjectId : undefined,
    projects : []
  });

  let content;

  if(projectState.selectedProjectId === undefined)
  {
    content = <NoProjectView onAddProject = {handleAddProject}/>
  }

  if(projectState.selectedProjectId === null)
  {
    content = <NewProject onAddingProject = {handleAddingProject}/>
  }

  function handleAddProject()
  {
    setProjectState((prevState)=>{
      return {
        ...prevState,
        selectedProjectId : null
      }
    })
  }

  function handleAddingProject(projectData)
  {
    const projectId = Math.random()*100;
    const newProject = {
      ...projectData,
      id : projectId
    };

    setProjectState((prevState)=>{
      return {
        prevState,
        projects : [newProject,...prevState.projects]
      }
    });

  }

  return (
    <main>

    <ProjectSideBar  onAddProject = {handleAddProject} projects = {projectState.projects}/>
    {content}

    </main>
  )
}

export default App
