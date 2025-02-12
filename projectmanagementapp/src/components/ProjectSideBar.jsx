function ProjectSideBar({onAddProject,projects})
{
    return(
        <aside>
            <h3>Your Projects</h3>
            <div>
               <button onClick={onAddProject}>+ Add Project</button>
            </div>
            <ul>
                {projects && projects.map((project)=><li key={project.id}><button projectId = {project.id}>{project.name}</button></li>)}
            </ul>
        </aside>
    );
}

export default ProjectSideBar;