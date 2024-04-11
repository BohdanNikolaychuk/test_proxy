// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';

import { hydrateRoot } from 'react-dom';
import { Provider } from './providers/index.jsx';

hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <Provider />
  </React.StrictMode>
);
