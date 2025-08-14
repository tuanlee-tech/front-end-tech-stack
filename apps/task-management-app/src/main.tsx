import { RouterProvider } from '@tanstack/react-router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from './router/routes';

/**
 * Hàm khởi động MSW worker một cách bất đồng bộ.
 * Chỉ chạy trong môi trường development.
 */
async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  // Sử dụng dynamic import để tải worker từ MSW
  const { worker } = await import('./api/mocks/browser');

  // worker.start() trả về một Promise. Đợi Promise này hoàn thành.
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
});