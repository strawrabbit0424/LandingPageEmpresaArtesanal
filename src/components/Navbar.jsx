import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'

function CustomNavbar() {
  return (
    <Navbar className="navbar-custom" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <img
            src="/logo.svg"
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Sintax Solutions
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/servicios">Servicios</Nav.Link>
            <Nav.Link as={Link} to="/equipo">Conocenos</Nav.Link>
            <Nav.Link as={Link} to="/testimonios">Testimonios</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            {/* Puede ir icono de iniciar sesión */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar