import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSessionStorage } from '../../admin/useSessionStorage';
import axios from "axios";
import './login.css';

const SERVER_URL = "http://localhost:8080";

const Login = ({ setIsAuthenticated }) => {
    const [user, setUser] = useSessionStorage('user', '');
    const [email, setEmail] = useSessionStorage('email', '');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [password, setPassword] = useSessionStorage('pwd', '');
    const [showDisplay, setDisplay] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false); // Estado para controlar si se ha hecho clic en el botón de inicio de sesión


    const navigate = useNavigate();

    const handleButtonLoginClick = () => {
        setButtonClicked(true); // Establecer el estado de botón presionado como verdadero
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(`${SERVER_URL}/User/buscar`);
            const users = response.data;
            const userData = users.find(userData => userData.name === user && userData.email === email && userData.password === password);
            if (userData) {
                setIsAuthenticated(true);
                sessionStorage.setItem('isAuthenticated', 'true'); // Guardar estado de autenticación en el almacenamiento de sesión
                sessionStorage.setItem('userId', userData.id); // Guardar ID del usuario
                sessionStorage.setItem('userRole', userData.role); // Guardar rol del usuario
                navigate('/');
            } else {
                if (buttonClicked) {
                    alert('Credenciales incorrectas');
                }
            }
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };


    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== repeatPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const newUser = {
                name: user,
                email: email,
                password: password
            };

            const response = await axios.post(`${SERVER_URL}/User/crear`, newUser);

            if (response.status === 201) {
                setIsAuthenticated(true);
                sessionStorage.setItem('isAuthenticated', 'true');
                sessionStorage.setItem('userId', response.data.id); // Guardar el ID del usuario
                navigate('/');
            } else {
                alert('Error creating user');
            }
        } catch (error) {
            console.error("Error creating user:", error);
            alert('Error creating user');
        }
    };

    const goToRegister = () => {
        setDisplay(true);
    };


    return (
        <>
            <form className={`form ${showDisplay ? 'displayNone' : ''}`} onSubmit={handleLogin}>
                <div className='title'>
                    <h1>Welcome, TO HONEYCOMB</h1><br />
                    <span>sign in to continue</span>
                </div>
                <div className='loginSection'>
                    <input type='user' placeholder='User' name='user' className='input' value={user} onChange={(e) => setUser(e.target.value)} />
                    <input type='email' placeholder='Email' name='email' className='input' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type='password' placeholder='Password' name='password' className='input' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='button-confirm' type='submit' onClick={handleButtonLoginClick}>Let's go →</button>
                </div>
                <span style={{ textAlign: 'center', fontSize: '15px' }}>¿No te has registrado aún?</span>
                <button className='button-register' onClick={goToRegister} >¡Regístrate!</button>
            </form>
            <form className={`formRegister ${showDisplay ? '' : 'displayNone'}`} onSubmit={handleRegister}>
                <div className='title'>
                    <h1>Welcome, TO HONEYCOMB</h1><br />
                    <span>sign up to continue</span>
                </div>
                <div className='registerSection'>
                    <input type='user' placeholder='User' name='user' className='input' value={user} onChange={(e) => setUser(e.target.value)} />
                    <input type='email' placeholder='Email' name='email' className='input' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type='password' placeholder='Password' name='password' className='input' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type='password' placeholder='Repeat Password' name='repeatPassword' className='input' value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
                    <button className='button-confirm' type='submit'>Let's go →</button>
                </div>
            </form>

        </>
    );
};

export default Login;
