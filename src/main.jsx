import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position="top-right" />
    <App />
  </StrictMode>,
)
