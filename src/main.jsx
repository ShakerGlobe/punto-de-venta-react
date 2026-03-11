import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Añadimos una validación simple para TypeScript y consistencia
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("No se encontró el elemento root. Revisa tu index.html");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)