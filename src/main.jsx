import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// HashRouter, not BrowserRouter: GitHub Pages serves static files and has no
// way to rewrite unknown paths to index.html, so a deep link like
// /work/patudos would 404 on a hard refresh. Hash routes never reach the
// server.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
)
