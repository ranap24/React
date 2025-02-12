
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import NewFormPage from './pages/NewFormPage.jsx'
import RootLayout from './pages/RootLayout.jsx';
import {action as formAction} from './pages/NewFormPage.jsx'
import ListUsers,{loader as tableLoader} from './pages/ListofUsers.jsx';

function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element : <RootLayout/>,
      children : [
        {
          index : true,
          element : <HomePage/>
        },
        {
          path : '/form',
          element : <NewFormPage/>,
          action : formAction, 
        },
        {
          path : '/ListUsers',
          element : <ListUsers/>,
          loader : tableLoader
        }
      ]
    }
  ]
);

  return (
   <RouterProvider router={router}/> 
  )
}

export default App
