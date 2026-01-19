import { Container } from 'react-bootstrap'

function Footer() {
  return (
    <footer className="custom-footer py-4 mt-5">
      <Container>
        <div className="row">
          <div className="col-md-6">
            <h5>Sintax Solutions</h5>
            <p>Soluciones de software innovadoras</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p>&copy; 2024 Sintax Solutions. Todos los derechos reservados.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
