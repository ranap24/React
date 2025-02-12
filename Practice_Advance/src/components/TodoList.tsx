import { todoItem } from "../model"
import React from "react";
import '../css/TodoList.css';
import TodoItem from "./TodoItem";

interface Props{
    todos : todoItem[],
    setTodos : React.Dispatch<React.SetStateAction<todoItem[]>>
}

const TodoList: React.FC<Props> = ({todos,setTodos})=>
{
    return(
      <div className="todo_List">
          {todos.map((todo)=><TodoItem key = {todo.id} todo = {todo} todos = {todos} setTodos = {setTodos}/>)}
        </div>  
    );
}

export default TodoList;