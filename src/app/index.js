// src/index.js
import React from 'react';
import { Provider } from './providers/index.jsx';
import ReactDOM from 'react-dom/client';
import './global.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider />
  </React.StrictMode>
);
