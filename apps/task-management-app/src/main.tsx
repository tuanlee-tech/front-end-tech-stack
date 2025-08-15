// File: src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './api/mocks/setup'; // Import để khởi động MSW

ReactDOM.createRoot(document.getElementById('root')!).render(
  process.env.NODE_ENV === 'development' ? (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ) : (
    <App />
  )
);