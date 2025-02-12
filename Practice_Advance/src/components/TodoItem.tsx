import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { todoItem } from "../model"
import React, { useState,useRef, useEffect } from "react"
import { MdDone } from "react-icons/md"
import '../css/TodoList.css'

interface Props{
    todo : todoItem,
    key : number,
    todos : todoItem[],
    setTodos : React.Dispatch<React.SetStateAction<todoItem[]>>
}

const TodoItem : React.FC<Props> = ({todo,todos,setTodos}) =>
{
    const [edit,setEdit] = useState<Boolean>(false);
    const [editTodo,setEditTodo] = useState<string>(todo.todo);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        if(edit)
        {
            inputRef.current?.focus();
        }
    },[edit])

    function handleDone(id : number)
    {
       setTodos(todos.map((todo)=>todo.id === id ? {...todo,isDone : !todo.isDone} : todo ))  ;
    }
    function handleDelete(id : number)
    {
        setTodos(todos.filter((todo)=> todo.id !== id));
    }

    function handleEdit(e : React.FormEvent<EventTarget>,id : number)
    {
        e.preventDefault();
        setTodos(todos.map((todo)=>todo.id === id ? {...todo,todo : editTodo} : todo))
        setEdit(false);
    }

    return (
    <form  className="todo_single" key={todo.id} onSubmit={(e)=>handleEdit(e,todo.id)}>

      {edit ? <input className="todo_single_text" value = {editTodo} onChange={(e) => setEditTodo(e.target.value)} ref = {inputRef}/> : 
      todo.isDone ? 
        <s className="todo_single_text">{todo.todo}</s>
        : 
        <span className="todo_single_text">{todo.todo}</span>
      }

        
        <div>
            <span className="todo_icon" onClick={()=>setEdit((prevEdit)=>!prevEdit)} ><AiFillEdit/></span>
            <span className="todo_icon" onClick={() => handleDelete(todo.id)}><AiFillDelete/></span>
            <span className="todo_icon" onClick={() => handleDone(todo.id)}><MdDone/></span>
        </div>
    </form>
    )
}

export default TodoItem;