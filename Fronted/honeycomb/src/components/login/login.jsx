import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSessionStorage } from '../../admin/useSessionStorage';
import './login.css';

const Login = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useSessionStorage('email', '');
    const [password, setPassword] = useSessionStorage('pwd','');




    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Falta todavía hacer la logica de autenticación
        if (email === 'papa@example.com' && password === 'password') {
            setIsAuthenticated(true);
            sessionStorage.setItem('isAuthenticated', 'true'); // Guardar estado de autenticación en el almacenamiento de sesión
            navigate('/');
        } else {
            alert('Credenciales incorrectas');
        }
    };

    const handleRegister = () => {

        
    };

    return (
        <form className='form' onSubmit={handleLogin}>
            <div className='title'>
                <h1>Welcome, TO HONEYCOMB</h1><br />
                <span>sign up to continue</span>
            </div>
            <div className='loginSection'>
                <input type='email' placeholder='Email' name='email' className='input' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='Password' name='password' className='input' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='button-confirm' type='submit'>Let's go →</button>
            </div>
            <span style={{ textAlign: 'center' , fontSize: '15px'}}>¿No te has registrado aún?</span>
            <button className='button-register' onClick={handleRegister} >¡Regístrate!</button>
        </form>
    );
};

export default Login;
