import React from 'react';
import ReactDOM from 'react-dom/client';
import Rotas from './rotas';
import { BrowserRouter } from 'react-router-dom';

import "./global.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  </React.StrictMode>
);
