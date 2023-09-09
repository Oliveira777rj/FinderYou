import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./reset.css";
import { ThemeProvider } from './contexts/themeContext';
import { UserProvider } from './contexts/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<ThemeProvider>
    <UserProvider>
        <App />
    </UserProvider>
</ThemeProvider>

);

