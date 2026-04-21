import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("❌ Error Crítico: No se encontró el contenedor '#root' en el archivo index.html.");
}

// Renderizado de la aplicación
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {/* HelmetProvider gestiona las etiquetas <head> dinámicas para el SEO */}
    <HelmetProvider>
      {/* BrowserRouter habilita el enrutamiento sin recargar la página */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);