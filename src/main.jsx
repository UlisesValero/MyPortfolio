import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css';
import { ThemeProvider } from './context/ThemeContext.jsx'
import { PanelProvider } from './context/PanelContext.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';
import { MotionConfig } from 'motion/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MotionConfig transition={{ duration: 0.4, ease: "easeOut" }}>
    <LanguageProvider>
    <PanelProvider>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </PanelProvider>
    </LanguageProvider>
    </MotionConfig>
  </StrictMode>,
)
