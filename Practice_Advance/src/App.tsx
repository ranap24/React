import './App.css';
import React, { useState } from 'react';
import InputField from './components/InputField';
import { todoItem } from './model';
import TodoList from './components/TodoList';

const App : React.FC = () => {

  const[todo,setTodo] = useState<string>("");
  const[todos,setTodos] = useState<todoItem[]>([]);

  function handleAdd(e : React.FormEvent<EventTarget>)
  {
    e.preventDefault();
    if(todo)
    {
      setTodos((prevTodos)=>[...prevTodos,{id : Date.now(),todo,isDone : false}]);
    }
    setTodo("");
  }

  console.log(todos);
  return (
    <div className='App'>
       <span className="heading">Taskify</span>
       <InputField  todo = {todo} setTodo = {setTodo} handleAdd={handleAdd}/>
       <TodoList todos = {todos} setTodos = {setTodos}/>
    </div>
  );
}



export default App
