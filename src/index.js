import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';

import 'normalize.css';
import './index.css';
import "./fonts/fonts.css";
import "./components/ui/common.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

