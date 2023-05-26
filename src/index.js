import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './layout/global';
import { ToDoProvider } from './context/ToDoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDoProvider>
      <GlobalStyle />
      <App />
    </ToDoProvider>
  </React.StrictMode>
);