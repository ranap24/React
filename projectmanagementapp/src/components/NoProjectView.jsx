function NoProjectView({onAddProject})
{
    return (
        <div>
            <h3>No Projects selected</h3>
            <p> Create one</p>
            <button onClick={onAddProject}>+ Create Project</button>
        </div>
    );
}

export default NoProjectView;