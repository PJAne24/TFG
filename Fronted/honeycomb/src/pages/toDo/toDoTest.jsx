import React from 'react';
import './toDoTest.css';

const ToDoTest = () => {
    return (
        <div className='container'>
            <div className='uno'>
                <div className="hexagonBack">
                    <div className='hexagon'>
                        <span className="titleHexagon">Profile</span>
                    </div>
                </div>
                <div className="hexagonBack">
                    <div className='hexagon'>
                        <span className="titleHexagon">ToDo</span>
                    </div>
                </div>
                <div className="hexagonBack">
                    <div className='hexagon'>
                        <span className="titleHexagon">Tasks</span>
                    </div>
                </div>
            </div>
            <div className='dos'>
                <div className="hexagonBack">
                    <div className='hexagon'>
                        <span className="titleHexagon">Calendar</span>
                    </div>
                </div>
                <div className="hexagonBack">
                    <div className='hexagon'>
                        <span className="titleHexagon">Credits</span>
                    </div>
                </div>
            </div>
            <div className='dos' id="dos-dos">
                <div className="hexagonBack">
                    <div className='hexagon'>
                        <span className="titleHexagon">Tasks</span>
                    </div>
                </div>
                <div className="hexagonBack">
                    <div className='hexagon'>
                        <span className="titleHexagon">Calendar</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToDoTest;
