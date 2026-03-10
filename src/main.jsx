import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Quitamos el "!" después del paréntesis de getElementById
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)