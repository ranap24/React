function SelectedProject({project})
{

    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-us',{
        year : '2-digit',
        month : 'short',
        day : 'numeric'
    });
    return(
        <div>
         <h2>{project.name}</h2>  
         <p>{project.description}</p>
         <p>{formattedDate}</p> 
        </div>
    );
}