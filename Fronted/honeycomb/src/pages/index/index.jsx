import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header';
// import ToDo from '../toDo/toDo';
import ToDoTest from '../toDo/toDoTest';
import Calendario from '../calendario';
import Notas from '../notas';
import ToDO from '../../assets/toDO.png'
import calendar from '../../assets/calendar.png'
import notes from '../../assets/notes.png'
import sesion from '../../assets/sesion.png'
import './index.css';


const Index = () => {
  const [currentPage, setCurrentPage] = useState('menu');
  const [scrolled, setScrolled] = useState(false);

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

  const renderPage = () => {
    switch (currentPage) {
      case 'calendario':
        return <Calendario />;
      case 'notas':
        return <Notas />;
    }
  };

  return (
    <>
      <div className={`body ${scrolled ? 'scrolled' : ''}`}>
        <section className="uno">
          <div className="menu">
          <span id="general">General</span>
            <div>
              <button className='bn5' onClick={pagNotas}><img src={sesion} alt="" className='icons' />   Profile</button>
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
          <ToDoTest/>
        </section>
      </div>
    </>
  );
};

export default Index;
