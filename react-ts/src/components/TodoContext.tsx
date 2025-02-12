import React,{ createContext, PropsWithChildren } from "react";
import Todos from '../models/Todo';
import { useState } from "react";

type contextObject = {
    items : Todos[],
    addTodoItem : (text : string) => void,
    removeTodoItem : (event : React.MouseEvent) => void
}
export const TodoContext = createContext<contextObject>({
    items: [],
    addTodoItem : () => {},
    removeTodoItem : () => {}
})

const TodoContextProvider : React.FC<PropsWithChildren> = (props) => {

    const [TodoDynamic,setTodoDynamic] = useState<Todos[]>([]);

  const addTodoItem = (text : string) => {

    const newTodo = new Todos(text)
    setTodoDynamic((prevTodoarray)=> prevTodoarray.concat(newTodo));
  };

  const removeTodoItem = (event : React.MouseEvent) => {
       const text = event.currentTarget.textContent;
       setTodoDynamic((prevarray)=>{
        return prevarray.filter(todo => todo.text !== text);
       })
  }

  const ctx : contextObject = {
    items : TodoDynamic,
    addTodoItem : addTodoItem,
    removeTodoItem : removeTodoItem
  }

    return (
    <TodoContext.Provider value={ctx}>
     {props.children}
    </TodoContext.Provider>);

}

export default TodoContextProvider;