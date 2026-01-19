import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLaptopCode, FaCameraRetro, FaInstagram, FaTags, FaPalette, FaMapMarkedAlt } from 'react-icons/fa';

function ServicesPage() {
  return (
    <>
      {/* Introducción */}
      <Container className="my-5">
        <Row>
          <Col md={12} className="text-center">
            <h1>Equipo Team</h1>
            <h4>Tu marca artesanal merece brillar</h4>
            <p>
              En Equipo Team, ayudamos a marcas artesanales como <strong>Lácteos del Valle</strong> a destacar su esencia.
              Creamos experiencias digitales que transmiten sabor, tradición y confianza.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Servicios */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Nuestros Servicios</h2>
        <p className="text-center mb-5">
          Soluciones integrales para que tu marca artesanal destaque en el mercado digital
        </p>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title><FaLaptopCode /> Diseño de página web</Card.Title>
                <Card.Text>
                  Creamos una web moderna, responsiva y fácil de navegar para mostrar tus productos y contar la historia de la marca.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title><FaCameraRetro /> Fotografía de producto</Card.Title>
                <Card.Text>
                  Capturamos la textura, color y presentación de cada producto para que el cliente lo saboree con la vista.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title><FaInstagram /> Gestión de redes sociales</Card.Title>
                <Card.Text>
                  Diseñamos contenido visual y textual para tus imágenes, Facebook y TikTok que conecte con tu audiencia del queso.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title><FaTags /> Diseño de etiquetas y empaques</Card.Title>
                <Card.Text>
                  Definimos el diseño que se alinee con tu propuesta de valor, con una identidad visual coherente.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title><FaPalette /> Branding completo</Card.Title>
                <Card.Text>
                  Definimos colores, tipografía y tono de voz para que tu marca tenga una presencia sólida y memorable.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title><FaMapMarkedAlt /> Estrategia de marketing local</Card.Title>
                <Card.Text>
                  Ayudamos a posicionar tu marca en mercados regionales, ferias y tiendas especializadas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Cierre sin botones */}
      <Container className="text-center my-5">
        <h4>¿Tienes una marca artesanal y quieres que el mundo la conozca?</h4>
        <p>Creamos soluciones que saben a éxito.</p>
      </Container>
    </>
  );
}

export default ServicesPage;