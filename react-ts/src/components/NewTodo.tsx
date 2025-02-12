import { FormEvent,useRef } from "react";
import { useContext } from "react";
import { TodoContext } from "./TodoContext";

const NewTodo : React.FC = () =>
{
    const ctx = useContext(TodoContext);
    const input = useRef<HTMLInputElement>(null);
    function handleSubmit(event : React.FormEvent)
    {
        event.preventDefault();
        const text = input.current!.value;
        ctx.addTodoItem(text);
        
        
    }


    return (
        <form onSubmit={(event)=>handleSubmit(event)}>
            <label htmlFor="text">label</label>
            <input type = 'text' id="text" ref = {input}/>
            <button type="submit">submit</button>
        </form>
    );
}

export default NewTodo;