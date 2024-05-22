import React, { useState, useEffect } from 'react';
import './credit.css';
import Header from "../../components/header/header.jsx";

const Credit = () => {
    const [titulo, setTitulo] = useState("Jane.");

    const handleClick = () => {
        const tituloElement = document.getElementById("titulo");
        if (titulo === "Jane.") {
            tituloElement.style.transition = "2s";
            tituloElement.innerHTML = "Jhoanna Pereira.";
            tituloElement.style.width = "15ch";
            setTitulo("Jhoanna Pereira.");
        } else {
            tituloElement.style.transition = "1s";
            tituloElement.innerHTML = "Jane.";
            tituloElement.style.width = "5ch";
            setTitulo("Jane.");
        }
    };

    return (
        <>
            <Header />
            <div className={'containerCredit'}>
                <span id="titulo" onClick={handleClick}>{titulo}</span>
            </div>
        </>
    );
}

export default Credit;
