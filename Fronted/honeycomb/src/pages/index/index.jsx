import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header';
import ToDoTest from '../toDo/toDoTest';
import Calendario from '../calendario';
import Profile from '../profile.jsx';
import ParticlesBackground from '../../components/header/particlesBackground.jsx';
import Notas from '../notas';
import ToDO from '../../assets/toDO.png'
import calendar from '../../assets/calendar.png'
import notes from '../../assets/notes.png'
import sesion from '../../assets/sesion.png'
import './index.css';


const Index = () => {
  const [currentPage, setCurrentPage] = useState('menu');
  const [scrolled, setScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // Estado para controlar si el pop-up de Profile está abierto

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const pagCalendario = () => {
    setCurrentPage('calendario');
  };

  const pagNotas = () => {
    setCurrentPage('notas');
  };

  const toggleProfilePopup = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <>
      <ParticlesBackground />
      <div className={`body ${scrolled ? 'scrolled' : ''}`}>
        <section className="uno">
          <div className="menu">
            <span id="general">General</span>
            <div>
              {/* Llama a la función toggleProfilePopup al hacer clic en el botón */}
              <button className='' onClick={toggleProfilePopup}><img src={sesion} alt="" className='icons' />   Profile</button>
            </div>
            <div>
              <button ><img src={ToDO} alt="" className='icons' />   To do</button>
            </div>
            <div>
              <button onClick={pagCalendario}><img src={calendar} alt="" className='icons' />  Calendar</button>
            </div>
            <div>
              <button className='bn5' onClick={pagNotas}><img src={notes} alt="" className='icons' />   Notes</button>
            </div>
          </div>
        </section>
        <section >
          <ToDoTest />
        </section>
      </div>

      {/* Renderiza el pop-up de Profile si está abierto */}
      {isProfileOpen && (
        <div className="profile-popup">
          <div className="profile-popup-content">
            <Profile />
            {/* Agrega una "x" en la esquina superior derecha del pop-up para cerrarlo */}
            <button className="close-button" onClick={toggleProfilePopup}>×</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
