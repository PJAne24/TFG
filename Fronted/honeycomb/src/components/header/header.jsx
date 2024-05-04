import { Link } from "react-router-dom"

const header = () => {

    return (
      <header>
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/admin">Panel de Control</Link></li>
            </ul>
        </nav>
      </header>
    )
  }
  
export default header