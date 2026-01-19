import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaCode, FaMobileAlt, FaCogs, FaLightbulb, FaShoppingCart, FaTools } from 'react-icons/fa'

function Services() {
  const services = [
    {
      title: 'Desarrollo Web',
      description: 'Creamos sitios web modernos, responsivos y optimizados para SEO.',
      icon: <FaCode style={{color: '#284B63'}} />
    },
    {
      title: 'Aplicaciones Móviles',
      description: 'Desarrollamos apps nativas y multiplataforma para iOS y Android.',
      icon: <FaMobileAlt style={{color: '#284B63'}} />
    },
    {
      title: 'Software Personalizado',
      description: 'Soluciones a medida diseñadas para las necesidades de tu empresa.',
      icon: <FaCogs style={{color: '#284B63'}} />
    },
    {
      title: 'Consultoría IT',
      description: 'Asesoramiento experto en tecnología para optimizar procesos.',
      icon: <FaLightbulb style={{color: '#284B63'}} />
    },
    {
      title: 'E-commerce',
      description: 'Plataformas de comercio electrónico con pasarelas de pago.',
      icon: <FaShoppingCart style={{color: '#284B63'}} />
    },
    {
      title: 'Mantenimiento',
      description: 'Soporte continuo y actualizaciones para tu software.',
      icon: <FaTools style={{color: '#284B63'}} />
    }
  ]

  return (
    <section className="py-5" id="servicios">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Nuestros Servicios</h2>
          <p className="lead text-muted">
            Ofrecemos soluciones tecnológicas completas para impulsar tu negocio
          </p>
        </div>
        
        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="h-100 shadow-sm border-0 hover-card">
                <Card.Body className="text-center p-4">
                  <div className="fs-1 mb-3 text-primary">{service.icon}</div>
                  <Card.Title className="fw-bold mb-3">{service.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Services