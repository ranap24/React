import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import configureStore from './hooks-store/products-store';

configureStore();

const root = ReactDOM.createroot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  
);
