import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { PanelProvider } from './context/PanelContext.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/router.jsx'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
        <LanguageProvider>
          <PanelProvider>
            <RouterProvider router={router} />
          </PanelProvider>
        </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)
