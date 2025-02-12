
import './App.css';
import Todo from './components/Todo';
import Todos from './models/Todo';
import NewTodo from './components/NewTodo';
import TodoContextProvider from './components/TodoContext';
import { TodoContext } from './components/TodoContext';

function App() {
  return (
    <TodoContextProvider>
    <div className="App">
        <NewTodo/>
        <Todo/>
    </div>
    </TodoContextProvider>
  );
}

export default App;
