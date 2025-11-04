import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App';

let rootEl = document.getElementById('root');
if (rootEl === null) {
  const div = document.createElement('div');
  div.id = 'root';
  document.body.appendChild(div);
  rootEl = div;
}

const container = rootEl instanceof Element ? rootEl : document.body;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);