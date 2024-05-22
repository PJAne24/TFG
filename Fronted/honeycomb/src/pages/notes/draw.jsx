import React, { useState } from 'react';
import Header from '../../components/header/header.jsx';
import DrawingCanvas from './drawPanel/DrawingCanvas.jsx';
import './draw.css';

const Notas = () => {
  // Añadir el estado para el color y el ancho del pincel
  const [color, setColor] = useState("#000"); // Estado para el color del pincel
  const [width, setWidth] = useState(5); // Estado para el ancho del pincel

  return (
    <>
      <Header />
      <div className='contenedorNotes'>
        <h1>----Drawing----</h1>
        <h2>Aquí puedes dibujar lo que necesites y luego ¡Descargarlo!</h2>
        <div className='canvaSection'>
          <DrawingCanvas color={color} width={width} /> {/* Componente de dibujo con los props color y width */}
          <div className='inputs'>
            <input type="color" name="colorChooser" value={color} id="colorChooser" onChange={(e) => setColor(e.target.value)} /> {/* Selector de color */}
            <input type="range" name="widthPaintBrush" value={width} id="widthPaintBrush" onChange={(e) => setWidth(Number(e.target.value))} /> {/* Selector de ancho del pincel */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notas;
