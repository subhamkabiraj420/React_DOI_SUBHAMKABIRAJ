import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

let appRoot = document.getElementById('root');
if (!appRoot) {
  appRoot = document.createElement('div');
  appRoot.id = 'root';
  document.body.appendChild(appRoot);
}

createRoot(appRoot).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);