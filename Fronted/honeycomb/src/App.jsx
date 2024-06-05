// src/main.jsx
import React, { useEffect } from 'react';
import { useSessionStorage } from './controlPanel/useSessionStorage.jsx';
import ReactDOM from 'react-dom/client';
import './App.css';

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import Index from './pages/index/index.jsx';
import Calendario from './pages/calendar/calendario.jsx';
import Login from './components/login/login.jsx';
import ToDo from './pages/toDo/toDo.jsx';
import Draw from './pages/draw/draw.jsx';
import Tasks from './pages/task/task.jsx'
import Credits from './pages/credit/credit.jsx'

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
    },
    {
      path: "/credits",
      element: <ProtectedRoute element={<Credits />} isAuthenticated={isAuthenticated} />
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
