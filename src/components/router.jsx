import App from '../App.jsx'
import Hobbies from './pages/Hobbies.jsx'
// import NotFoundPage from './components/pages/NotFoundPage.jsx' // si tienes una página 404

import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/projects", element: <App /> },
  { path: "/contact", element: <App /> },
  { path: "/hobbies", element: <Hobbies /> },
  // { path: "*", element: <NotFoundPage /> }
])