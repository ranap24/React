import { createBrowserRouter,RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ProductsPage from "./Components/ProductsPage";
import RootLayout from "./Components/RootLayout";
import ErrorPage from "./Components/ErrorPage";
import ProductViewPage from "./Components/ProductViewPage";



// const routerDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element = {<HomePage/>}/>
//     <Route path='/products' element = {<ProductsPage/>}/>
//   </Route>
// );
// const routes = createBrowserRouter(routerDefinitions);


const routes = createBrowserRouter([

  {
    path : '/',
    element: <RootLayout/>,
    errorElement : <ErrorPage/>,
    children : [
      {
        path:'',
        element : <HomePage/>
        
      },
      {
        path:'products',
        element : <ProductsPage/>
      },
      {
        path : 'products/:ProductId',
        element: <ProductViewPage/>
      }

    ]
  }
 
]);


function App() {
  return <RouterProvider router={routes}/>;
}

export default App;
