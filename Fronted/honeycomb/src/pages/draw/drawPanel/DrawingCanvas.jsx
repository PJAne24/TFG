import React, { useRef, useEffect } from 'react';


const DrawingCanvas = ({ color, width }) => {
    const canvasRef = useRef(null); // Referencia al elemento canvas
    const contextRef = useRef(null); // Referencia al contexto del canvas para dibujar
  
    // Coordenadas iniciales
    let initialX;
    let initialY;
  
    // useEffect para configurar el canvas y agregar los event listeners
    useEffect(() => {
      const mainCanvas = canvasRef.current; // Obtener el elemento canvas
      const context = mainCanvas.getContext("2d"); // Obtener el contexto de dibujo en 2D
      contextRef.current = context; // Guardar el contexto en la referencia
  
      // Obtener la posición del canvas en la pantalla para corregir las coordenadas del ratón/táctil
      let posicion = mainCanvas.getBoundingClientRect();
      let correccionX = posicion.x;
      let correccionY = posicion.y;
  
      // Función para dibujar en el canvas
      const draw = (cursorX, cursorY) => {
        context.beginPath(); // Comenzar un nuevo trazo
        context.moveTo(initialX, initialY); // Mover a la posición inicial
  
        // Configuración del pincel
        context.lineWidth = width; // Ancho del pincel
        context.strokeStyle = color; // Color del pincel
        context.lineCap = "round"; // Terminaciones redondeadas
        context.lineJoin = "round"; // Uniones redondeadas
  
        context.lineTo(cursorX, cursorY); // Dibujar una línea hasta la posición del cursor
        context.stroke(); // Realizar el trazo
  
        // Actualizar la posición inicial para el siguiente segmento
        initialX = cursorX;
        initialY = cursorY;
      };
  
      // Función para manejar el evento mousedown/touchstart
      const mouseDown = (evt) => {
        evt.preventDefault();
        if (evt.changedTouches === undefined) {
          // Para ratón
          initialX = evt.offsetX;
          initialY = evt.offsetY;
        } else {
          // Para pantallas táctiles
          initialX = evt.changedTouches[0].pageX - correccionX;
          initialY = evt.changedTouches[0].pageY - correccionY;
        }
        draw(initialX, initialY); // Iniciar el dibujo
        mainCanvas.addEventListener("mousemove", mouseMoving);
        mainCanvas.addEventListener('touchmove', mouseMoving);
      };
  
      // Función para manejar el evento mousemove/touchmove
      const mouseMoving = (evt) => {
        evt.preventDefault();
        if (evt.changedTouches === undefined) {
          draw(evt.offsetX, evt.offsetY); // Dibujar con el ratón
        } else {
          draw(evt.changedTouches[0].pageX - correccionX, evt.changedTouches[0].pageY - correccionY); // Dibujar en pantallas táctiles
        }
      };
  
      // Función para manejar el evento mouseup/touchend
      const mouseUp = () => {
        mainCanvas.removeEventListener("mousemove", mouseMoving);
        mainCanvas.removeEventListener("touchmove", mouseMoving);
      };
  
      // Añadir los event listeners
      mainCanvas.addEventListener("mousedown", mouseDown);
      mainCanvas.addEventListener("mouseup", mouseUp);
  
      // Pantallas táctiles
      mainCanvas.addEventListener('touchstart', mouseDown);
      mainCanvas.addEventListener('touchend', mouseUp);
  
      // Limpiar los event listeners cuando el componente se desmonte
      return () => {
        mainCanvas.removeEventListener("mousedown", mouseDown);
        mainCanvas.removeEventListener("mouseup", mouseUp);
        mainCanvas.removeEventListener('touchstart', mouseDown);
        mainCanvas.removeEventListener('touchend', mouseUp);
      };
    }, [color, width]); // Re-ejecutar el efecto si cambian el color o el ancho del pincel
  
    // Función para descargar el contenido del canvas como imagen
    const downloadCanvas = () => {
      const canvas = canvasRef.current;
      const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // Convertir el canvas a una URL de datos
      const link = document.createElement('a'); // Crear un enlace temporal
      link.download = 'canvas.png'; // Nombre del archivo de descarga
      link.href = image; // Establecer la URL de datos como el href del enlace
      link.click(); // Simular un clic en el enlace para iniciar la descarga
    };
  
    return (
      <div>
        <canvas ref={canvasRef} id="main-canvas" width="800" height="600"></canvas>
        <button onClick={downloadCanvas}>Descargar</button> {/* Botón para descargar la imagen */}
      </div>
    );
  };

export default DrawingCanvas