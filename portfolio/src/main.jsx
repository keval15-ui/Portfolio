import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  // Use relative path
import App from './App.jsx'  // Use relative path

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
