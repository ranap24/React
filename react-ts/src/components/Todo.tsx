import React, { useContext } from "react";
import Todos from "../models/Todo";
import List from "./List";
import {TodoContext} from './TodoContext';


const Todo : React.FC = () => {
    const ctx = useContext(TodoContext);
    return (
      <ul >
        {ctx.items.map((item)=><List removeTodo={ctx.removeTodoItem}  key={item.id} text={item.text}/>)}
      </ul>
    );
}

export default Todo;