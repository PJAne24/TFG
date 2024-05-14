import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Index from './pages/index/index.jsx'
import Calendario from './pages/calendario'
import PanelControl from './admin/panelControl'
import Login from './pages/login.jsx'
import ToDo from './pages/toDo/toDo.jsx'


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
  ,
  {
    "path": "/sesion",
    "element": <Login />
  },
  {
    "path": "/toDo",
    "element": <ToDo />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
