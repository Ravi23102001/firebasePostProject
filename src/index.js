import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeContextProvider } from './context/ThemeContext';
import { ToastContainer } from 'react-toastify';
import { AuthContexProvider } from './context/AuthContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContexProvider>
        <ThemeContextProvider>
            <App />
            <ToastContainer autoClose={2000} />
        </ThemeContextProvider>
    </AuthContexProvider>
);


