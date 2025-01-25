import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ToastContainer } from 'react-toastify';
import { AuthContextProdiver } from "./contextAPi/AuthContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthContextProdiver>
     <App />
     <ToastContainer />
     </AuthContextProdiver>
  
  </StrictMode>
);
