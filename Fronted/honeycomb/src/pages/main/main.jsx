import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/Logo.png';
import './main.css';
import { Link } from "react-router-dom";

const hexagon = () => {
    const navigate = useNavigate();

    useEffect(() => {
        //seleccionamos la clase
        const hexagons = document.querySelectorAll('.hexagon');

        //función para que se itere aleatoriamente la propiedad de animation-delay
        hexagons.forEach(hexagon => {
            const randomDelay = Math.random() * 4.9;
            hexagon.style.animationDelay = `${randomDelay}s`;
        });
    }, []);

    useEffect(() => {
        //seleccionamos la clase
        const hexagons = document.querySelectorAll('.hexagonBack');

        //función para que se itere aleatoriamente la propiedad de animation-delay
        hexagons.forEach(hexagon => {
            const randomDelay = Math.random() * 4.9;
            hexagon.style.animationDelay = `${randomDelay}s`;
        });
    }, []);

    const logOut = () => {
        sessionStorage.clear()
        navigate('/login')
    }

    return (
        <div className='container'>
            <div className='uno'>
                <div className="hexagonBack">
                    <div className='hexagon'>
                        <span className="titleHexagon"><Link to="/toDo" className='titleHexagon'>ToDo</Link></span>
                    </div>
                </div>
                <div className="hexagonBack">
                    <div className='centerHexagon'>
                        <span className="titleHexagon"><img src={logo} alt="" id='logo' /></span>
                    </div>
                </div>
                <div className="hexagonBack">
                    <div className='hexagon'>
                        <span className="titleHexagon"><Link to="/tasks" className='titleHexagon'>Tasks</Link></span>
                    </div>
                </div>
            </div>
            <div className='dos'>
                <div className="hexagonBack">
                    <div className='hexagon'>
                        <span className="titleHexagon"><Link to="/draw" className='titleHexagon'>Draw</Link></span>
                    </div>
                </div>
                <div className="hexagonBack">
                    <div className='hexagon'>
                        <span className="titleHexagon"><Link to="/calendar" className='titleHexagon'>Calendar</Link></span>
                    </div>
                </div>
            </div>
            <div className='dos' id="dos-dos">
                <div className="hexagonBack">
                    <div className='hexagon'>
                        <span><button onClick={logOut} className='titleHexagon'>Cerrar sesión</button></span>
                    </div>
                </div>
                <div className="hexagonBack">
                    <div className='hexagon'>
                        <span className="titleHexagon"><Link to="/credits" className='titleHexagon'>Credits</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default hexagon;
