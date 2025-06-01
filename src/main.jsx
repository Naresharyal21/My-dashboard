import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import { ToastContainer } from 'react-toastify';


import AppRoutes from './Routes.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <AppRoutes />
      <ToastContainer />
    </StrictMode>
  </BrowserRouter>
);
