import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Index from './pages/index'
import Calendario from './pages/calendario'
import PanelControl from './admin/panelControl'


const router = createBrowserRouter([
  {
    "path": "/",
    "element": <Index />
  },
  {
    "path": "/calendario",
    "element": <Calendario />
  },
  {
    "path": "/admin",
    "element": <PanelControl />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
