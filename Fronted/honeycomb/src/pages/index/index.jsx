import React, { useState } from 'react';
import Header from '../../components/header/header'
import './index.css'
import ToDo from '../toDo/toDo'
import Calendario from '../calendario'
import Notas from '../notas'

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
      <Header />
      <div className="body">
        <section className="uno">
          <div className="menu">
            <div>
              <button onClick={pagToDo}>To do</button>
            </div>
            <div>
              <button onClick={pagCalendario}>Calendario</button>
            </div>
            <div>
              <button className='bn5' onClick={pagNotas}>Notas</button>
            </div>
          </div>
        </section>
        <section className="derecha">
          {renderPage()}
        </section>
      </div>
    </>
  );
};

export default Index;
