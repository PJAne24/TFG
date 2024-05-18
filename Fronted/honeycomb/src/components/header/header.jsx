import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/Logo.png'
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav>
          <button className="menu-btn centrar" onClick={toggleMenu}>☰</button>
        <ul className={menuOpen ? "camposMenu active" : "camposMenu"}>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/admin">Panel de Control</Link></li>
          <li><Link to="/login">Sesión</Link></li>
        </ul>
        <div>
          <img src={Logo} alt="Logo honeycomb" id="Logo" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
