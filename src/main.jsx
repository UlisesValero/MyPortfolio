import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css';
import { ThemeProvider } from './context/ThemeContext.jsx'
import { PanelProvider } from './context/PanelContext.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';
import { MotionConfig } from 'motion/react';
import { RouterProvider } from 'react-router-dom';
import NotFoundPage from './hooks/NotFoundPage.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <MotionConfig transition={{ duration: 0.4, ease: "easeOut" }}>
        <LanguageProvider>
          <PanelProvider>
            <App />
          </PanelProvider>
        </LanguageProvider>
      </MotionConfig>
    </ThemeProvider>
  </StrictMode>,
)
