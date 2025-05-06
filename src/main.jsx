import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css';
import { ThemeProvider } from './context/ThemeContext.jsx'
import { PanelProvider } from './context/PanelContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PanelProvider>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </PanelProvider>
  </StrictMode>,
)
