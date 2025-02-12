import Input from "./Input";
import { useRef } from "react";
import Modal from './Modal.jsx';

function NewProject({onAddingProject})
{

    const name = useRef();
    const description = useRef();
    const dueDate = useRef();
    const dialog = useRef();

    function handleSave()
    {  
        const projectData = {
        name : name.current.value,
        description : description.current.value,
        dueDate : dueDate.current.value
     }

     if(projectData.name.trim() === '' ||projectData.description.trim() === '' ||projectData.dueDate.trim() === '' )
     {
         dialog.current.open();
         return;
     }
     onAddingProject(projectData);
    }

    return (
        
        <>
        <Modal ref={dialog} caption = "Okay"><h2>Invalid Input</h2><p>Oops...Looks like Something went wrong</p><p>Please enter all the input fileds</p></Modal>
        <div>
        <menu>
            <button onClick={handleSave}>Save</button>
            <button>Cancel</button>
        </menu>
        <div>
           <Input label = 'Name' ref={name} />
           <Input label = 'Description' textarea ref={description} />
           <Input label = 'Due Date' ref={dueDate} type='date' />
        </div>
        </div>
        </>
        
    );
}

export default NewProject;