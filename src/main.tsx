import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom'; // El Router ahora vive aquí
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("No se encontró el elemento root. Revisa tu index.html");
}

// En TypeScript, le garantizamos a React que rootElement es un HTMLElement válido
ReactDOM.createRoot(rootElement as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);