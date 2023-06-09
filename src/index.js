import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/helpers.css'

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './css/reset.css'
import './css/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();