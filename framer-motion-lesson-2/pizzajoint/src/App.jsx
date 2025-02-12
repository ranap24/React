import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings.jsx';
import Order from './components/Order';
import Header from './components/Header.jsx';

const App = () => {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  }

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/base",
      element: <Base addBase={addBase} pizza={pizza} />
    },
    {
      path: "/toppings",
      element: <Toppings addTopping={addTopping} pizza={pizza} />
    },
    {
      path: "/order",
      element: <Order pizza={pizza} />
    },
  ]);

  return (
  <>
  <Header/> 
  <RouterProvider router={router} />
  </>
  );
}

export default App;
