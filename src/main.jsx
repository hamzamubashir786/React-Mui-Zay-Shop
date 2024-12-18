import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,  // Opt-in to React.startTransition
        v7_relativeSplatPath: true // Fix relative splat path behavior
      }}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
