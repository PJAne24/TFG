import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Index from './pages/index/index.jsx'
import Calendario from './pages/calendar/calendario.jsx'
import PanelControl from './admin/panelControl'
import Login from './components/login/login.jsx'
import ToDo from './pages/toDo/toDo.jsx'
import Notes from './pages/notas.jsx'


const router = createBrowserRouter([
  {
    "path": "/",
    "element": <Index />
  },
  {
    "path": "/calendar",
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
  },
  {
    "path": "/notes",
    "element": <Notes />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
