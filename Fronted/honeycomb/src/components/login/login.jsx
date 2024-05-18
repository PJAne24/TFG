import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Falta todavía hacer la logica de autenticación
        if (email === 'user@example.com' && password === 'password') {
            setIsAuthenticated(true);
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

/*LOCAL STORAGE IMPORTANTE*/
export default Login;
