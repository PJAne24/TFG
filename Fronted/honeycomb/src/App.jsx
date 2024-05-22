// src/main.jsx
import React, { useState, useEffect } from 'react';
import { useSessionStorage } from './admin/useSessionStorage.jsx';
import ReactDOM from 'react-dom/client';
import './App.css';

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import Index from './pages/index/index.jsx';
import Calendario from './pages/calendar/calendario.jsx';
import PanelControl from './admin/panelControl.jsx';
import Login from './components/login/login.jsx';
import ToDo from './pages/toDo/toDo.jsx';
import Draw from './pages/notes/draw.jsx';
import Tasks from './pages/tasks/task.jsx'

const ProtectedRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useSessionStorage('isAuthenticated', false);

  useEffect(() => {
    const storedVerify = sessionStorage.getItem('isAuthenticated');
    if (storedVerify === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

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
      path: "/draw",
      element: <ProtectedRoute element={<Draw />} isAuthenticated={isAuthenticated} />
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
