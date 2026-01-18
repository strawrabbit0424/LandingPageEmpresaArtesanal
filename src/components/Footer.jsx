import { Container } from 'react-bootstrap'

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <div className="row">
          <div className="col-md-6">
            <h5>Mi Empresa</h5>
            <p>Soluciones de software innovadoras</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p>&copy; 2024 Mi Empresa. Todos los derechos reservados.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer