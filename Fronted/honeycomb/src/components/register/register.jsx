import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // Aquí iría la lógica de registro, como enviar los datos al servidor
        // Suponemos que el registro es exitoso y redirigimos al usuario a la página de inicio de sesión
        console.log('Registro exitoso:', { username, email, password });
        navigate('/login');
    };

    return (
        <form className="form" onSubmit={handleRegister}>
            <div className="title" style={{ textAlign: 'center' }}>
                Register,<br />
                <span>create a new account</span>
            </div>
            <input
                type="text"
                placeholder="Username"
                name="username"
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                name="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                name="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="button-confirm" type="submit">Register</button>
        </form>
    );
};

export default Register;
