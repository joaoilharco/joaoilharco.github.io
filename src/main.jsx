import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// BrowserRouter works on GitHub Pages because the build also emits a 404.html
// copy of index.html (see vite.config.js). Pages serves that for any unknown
// path, so a deep link like /work/patudos still boots the app and the router
// picks the route up from the URL.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
