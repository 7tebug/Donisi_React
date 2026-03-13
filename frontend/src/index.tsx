import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// CSS is linked via public/index.html to preserve original paths

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
