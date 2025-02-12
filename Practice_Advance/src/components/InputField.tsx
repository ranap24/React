import React, { useRef } from "react";
import '../css/InputField.css';

interface Props{
    todo : string,
    setTodo : React.Dispatch<React.SetStateAction<string>>,
    handleAdd : (e : React.FormEvent<EventTarget>) => void
}

const InputField : React.FC<Props> = ({todo,setTodo,handleAdd}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className="input" onSubmit={(e)=>{handleAdd(e); inputRef.current?.blur()}}>
         <input className="input_box" placeholder="Enter a Task" type="text" ref = {inputRef} value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
         <button type="submit" className="input_submit">Go</button>
        </form>
    );
}

export default InputField;