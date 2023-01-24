import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './routes';
import { UserAuthContextProvider } from './common/contexts/UserAuthContext';


// Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

// Font Awsome
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <Router />
    </UserAuthContextProvider>
  </React.StrictMode>
);