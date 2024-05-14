import React from 'react';
import logo from '../../assets/Logo.png'
import './toDoTest.css';
import { Link } from "react-router-dom";

const ToDoTest = () => {
    return (
        <div className='container'>
            <div className='uno'>
                <div className="hexagonBack">
                    <div className='hexagon'>
                        <span className="titleHexagon"><Link to="/toDo" className='titleHexagon'>ToDo</Link></span>
                    </div>
                </div>
                <div className="hexagonBack">
                    <div className='hexagon'>
                        <span className="titleHexagon"><img src={logo} alt="" id='logo' /></span>
                    </div>
                </div>
                <div className="hexagonBack">
                    <div className='hexagon'>
                        <span className="titleHexagon"><Link to="/toDo" className='titleHexagon'>Tasks</Link></span>
                    </div>
                </div>
            </div>
            <div className='dos'>
                <div className="hexagonBack">
                    <div className='hexagon'>
                        <span className="titleHexagon"><Link to="/toDo" className='titleHexagon'>Notes</Link></span>
                    </div>
                </div>
                <div className="hexagonBack">
                    <div className='hexagon'>
                        <span className="titleHexagon"><Link to="/toDo" className='titleHexagon'>Calendar</Link></span>
                    </div>
                </div>
            </div>
            <div className='dos' id="dos-dos">
                <div className="hexagonBack">
                    <div className='hexagon'>
                        <span className="titleHexagon"><Link to="/toDo" className='titleHexagon'>Profile</Link></span>
                    </div>
                </div>
                <div className="hexagonBack">
                    <div className='hexagon'>
                        <span className="titleHexagon"><Link to="/toDo" className='titleHexagon'>Credits</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToDoTest;
