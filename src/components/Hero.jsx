import { Container, Button } from 'react-bootstrap'

function Hero() {
  return (
    <section className="bg-secondary text-white py-5" style={{ minHeight: '600px' }}>
      <Container className="d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: '500px' }}>
        <h1 className="display-3 fw-bold mb-4">
          Transformamos Ideas en Soluciones Digitales
        </h1>
        <p className="lead mb-5" style={{ maxWidth: '700px' }}>
          Somos una empresa especializada en crear software a medida 
          que impulsa el crecimiento de tu negocio con tecnología de vanguardia.
        </p>
        <div className="d-flex gap-3 flex-wrap justify-content-center">
          <Button variant="light" size="lg" className="px-4 py-2">
            Conocer Servicios
          </Button>
          <Button variant="outline-light" size="lg" className="px-4 py-2">
            Contactar
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default Hero