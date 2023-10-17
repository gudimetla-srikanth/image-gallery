import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Importing contect for wrapping up whole application
import Context from './store/Context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
    <App />
  </Context>
);

