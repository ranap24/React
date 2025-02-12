
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import RootLayout from './pages/RootLayout.jsx';
import CouponListPage from './pages/CouponListPage.jsx';
import AddCouponPage from './pages/AddCouponPage.jsx';
import EditCouponPage, {loader as couponLoader} from './pages/EditCouponPage.jsx';
import DeleteCouponPage from './pages/DeleteCouponPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';




const router = createBrowserRouter([
  {
    path : '/',
    element : <RootLayout/>,
    errorElement : <ErrorPage/>,
    children : [
      {
        index : true,
        element : <HomePage/>
      },
      {
        path : '/CouponList',
        element : <CouponListPage/>
      },
      {
        path : '/AddCoupon',
        element : <AddCouponPage/>,
        errorElement : <ErrorPage/>
      },
      {
        path : '/:couponId',
        element : <EditCouponPage/>,
        loader : couponLoader
      },
      {
        path : '/:couponId/delete',
        element : <DeleteCouponPage/>
      }
    ]

  }
])

function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
