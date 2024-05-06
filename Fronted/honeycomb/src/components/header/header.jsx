import { Link } from "react-router-dom"
import "./header.css"

const header = () => {

    return (
      <header className="centrar">
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/admin">Panel de Control</Link></li>
                <li><Link to="/sesion">Iniciar sesión</Link></li>
            </ul>
        </nav>
      </header>
    )
  }
  
export default header