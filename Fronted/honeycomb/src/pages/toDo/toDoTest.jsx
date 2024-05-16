import React, {useEffect} from 'react';
import logo from '../../assets/Logo.png';
import './toDoTest.css';
import { Link } from "react-router-dom";

const ToDoTest = () => {

    useEffect(() => {
        //seleccionamos la clase
        const hexagons = document.querySelectorAll('.hexagon');

        //función para que se itere aleatoriamente la propiedad de animation-delay
        hexagons.forEach(hexagon => {
            const randomDelay = Math.random() * 4.9;
            hexagon.style.animationDelay = `${randomDelay}s`;
        });
    }, []);

    return (
        <div className='container'>
            <div className='uno'>
                <div className="hexagonBack">
                    <div className='hexagon hexagon1'>
                        <span className="titleHexagon"><Link to="/toDo" className='titleHexagon'>ToDo</Link></span>
                    </div>
                </div>
                <div className="hexagonBack">
                    <div className='hexagon centerHexagon'>
                        <span className="titleHexagon"><img src={logo} alt="" id='logo' /></span>
                    </div>
                </div>
                <div className="hexagonBack">
                    <div className='hexagon hexagon3'>
                        <span className="titleHexagon"><Link to="/toDo" className='titleHexagon'>Tasks</Link></span>
                    </div>
                </div>
            </div>
            <div className='dos'>
                <div className="hexagonBack">
                    <div className='hexagon hexagon4'>
                        <span className="titleHexagon"><Link to="/toDo" className='titleHexagon'>Notes</Link></span>
                    </div>
                </div>
                <div className="hexagonBack">
                    <div className='hexagon hexagon5'>
                        <span className="titleHexagon"><Link to="/toDo" className='titleHexagon'>Calendar</Link></span>
                    </div>
                </div>
            </div>
            <div className='dos' id="dos-dos">
                <div className="hexagonBack">
                    <div className='hexagon hexagon6'>
                        <span className="titleHexagon"><Link to="/toDo" className='titleHexagon'>Profile</Link></span>
                    </div>
                </div>
                <div className="hexagonBack">
                    <div className='hexagon hexagon7'>
                        <span className="titleHexagon"><Link to="/toDo" className='titleHexagon'>Credits</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToDoTest;
