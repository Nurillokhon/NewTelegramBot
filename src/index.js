import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './compnents/Login/Login';
import Auth from './compnents/Auth/Auth';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path='/home' element={<App />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

