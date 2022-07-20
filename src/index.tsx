import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { AuthProvider } from './context/AuthProvider'
import App from './App';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './pages/Profile';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/profile" element={<Profile/>} />
        </Routes>
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>
);
