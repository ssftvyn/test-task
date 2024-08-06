import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Путь к компоненту App
import './style.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Убедитесь, что в public/index.html есть элемент с id="root"
);