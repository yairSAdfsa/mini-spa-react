import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-primary text-white py-3 mb-4 shadow-sm">
      <nav className="container d-flex justify-content-between align-items-center flex-wrap">
        <h1 className="h4 m-0">Mini SPA React</h1>
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link text-white" activeclassname="fw-bold">Inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/list" className="nav-link text-white" activeclassname="fw-bold">Listado</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link text-white" activeclassname="fw-bold">Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
