import React, { useState } from 'react';
import Header from '../components/header/header'
import './toDo/toDo.css'
import ToDo from './toDo/toDo'
import Calendario from './calendario'
import Notas from './notas'

const Index = () => {
  const [currentPage, setCurrentPage] = useState('menu'); // Estado para controlar qué página se muestra

  // Funciones para cambiar la página actual
  const pagToDo = () => {
    setCurrentPage('todo');
  };

  const pagCalendario = () => {
    setCurrentPage('calendario');
  };

  const pagNotas = () => {
    setCurrentPage('notas');
  };

  // Función para renderizar la página correspondiente
  const renderPage = () => {
    switch (currentPage) {
      case 'todo':
        return <ToDo />;
      case 'calendario':
        return <Calendario />;
      case 'notas':
        return <Notas />;
      default:
        return <ToDo />;
    }
  };

  return (
    <>
    <Header/>
      <div className="distri">
        <section className="uno">
          <h2>Menu de la izquierda</h2>
          <div className="menu">
            <div>
              <button onClick={pagToDo}>To do</button>
            </div>
            <div>
              <button onClick={pagCalendario}>Calendario</button>
            </div>
            <div>
              <button onClick={pagNotas}>Notas</button>
            </div>
          </div>
        </section>
        <section>{renderPage()}</section>
      </div>
    </>
  );
};

export default Index;
