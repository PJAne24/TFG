// src/main.jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import Index from './pages/index/index.jsx';
import Calendario from './pages/calendar/calendario.jsx';
import PanelControl from './admin/panelControl';
import Login from './components/login/login.jsx';
import ToDo from './pages/toDo/toDo.jsx';
import Notes from './pages/notas.jsx';
import Register from './components/register/register.jsx';
import Tasks from './pages/tasks/task.jsx'

const ProtectedRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};
//HACER LA CONEXION A LA BBDD AUTOMATICAMENTE
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute element={<Index />} isAuthenticated={isAuthenticated} />
    },
    {
      path: "/calendar",
      element: <ProtectedRoute element={<Calendario />} isAuthenticated={isAuthenticated} />
    },
    {
      path: "/admin",
      element: <ProtectedRoute element={<PanelControl />} isAuthenticated={isAuthenticated} />
    },
    {
      path: "/login",
      element: <Login setIsAuthenticated={setIsAuthenticated} />
    },
    {
      path: "/toDo",
      element: <ProtectedRoute element={<ToDo />} isAuthenticated={isAuthenticated} />
    },
    {
      path: "/notes",
      element: <ProtectedRoute element={<Notes />} isAuthenticated={isAuthenticated} />
    },
    {
      path: "/register",
      element: <ProtectedRoute element={<Register />} isAuthenticated={isAuthenticated} />
    },
    {
      path: "/tasks",
      element: <ProtectedRoute element={<Tasks />} isAuthenticated={isAuthenticated} />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
