import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Main from '../main/main.jsx';
import Profile from '../profile/profile.jsx';

//images
import ToDO from '../../assets/toDO.png'
import calendar from '../../assets/calendar.png'
import notes from '../../assets/notes.png'
import sesion from '../../assets/sesion.png'
import logo from '../../assets/Logo.png'
//css
import './index.css';


const Index = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false); // Estado para controlar si el pop-up de Profile está abierto
  const navigate = useNavigate();

  const toDoNav = () => {
    navigate('/toDo');

  };
  const calendarNav = () => {
    navigate('/calendar');
  };
  const drawNav = () => {
    navigate('/draw');
  };


  const toggleProfilePopup = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <>
      <div className="body">
        <section className="uno">
          <div className="menu">
            <img src={logo} alt="" id='logo' />
            <span id="general">General</span>
            <div>
              {/* Llama a la función toggleProfilePopup al hacer clic en el botón */}
              <button className='' onClick={toggleProfilePopup}><img src={sesion} alt="" className='icons' />   Profile</button>
            </div>
            <div>
              <button onClick={toDoNav}><img src={ToDO} alt="" className='icons' />   To do</button>
            </div>
            <div>
              <button onClick={calendarNav}><img src={calendar} alt="" className='icons' />  Calendar</button>
            </div>
            <div>
              <button onClick={drawNav}><img src={notes} alt="" className='icons' />   Draw</button>
            </div>
          </div>
        </section>
        <section >
          <Main />
        </section>
      </div>

      {/* Renderiza el pop-up de Profile si está abierto */}
      {isProfileOpen && (
        <div className="profile-popup">
          <div className="profile-popup-content">
            <Profile />
            <button className="close-button" onClick={toggleProfilePopup}>×</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
