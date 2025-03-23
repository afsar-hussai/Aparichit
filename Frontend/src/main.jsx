import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Complain from './pages/Complain.jsx'
import Success from './pages/Success.jsx'
import Thanks from './pages/Thanks.jsx'
import { Toaster } from 'sonner'

const router=createBrowserRouter([
  {
    path:"",
    element:<App/>
  },
  {
    path:"/complain",
    element:<Complain />
  },
  {
    path:"/success",
    element:<Success />
  },
  {
    path:"/thanks",
    element:<Thanks />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router} />
    <Toaster position='top-right' richColors />
    
  </StrictMode>,
)
