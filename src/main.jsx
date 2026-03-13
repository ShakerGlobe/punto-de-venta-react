import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HelmetProvider } from 'react-helmet-async'; // <--- Paso 1: Importar el proveedor
import './index.css'

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("No se encontró el elemento root. Revisa tu index.html");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HelmetProvider> {/* <--- Paso 2: Envolver la aplicación */}
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)