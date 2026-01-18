import { Container, Row, Col, Card } from 'react-bootstrap'

function Services() {
  const services = [
    {
      title: 'Desarrollo Web',
      description: 'Creamos sitios web modernos, responsivos y optimizados para SEO que convierten visitantes en clientes.',
      icon: '💻'
    },
    {
      title: 'Aplicaciones Móviles',
      description: 'Desarrollamos apps nativas y multiplataforma para iOS y Android con la mejor experiencia de usuario.',
      icon: '📱'
    },
    {
      title: 'Software Personalizado',
      description: 'Soluciones a medida diseñadas específicamente para las necesidades únicas de tu empresa.',
      icon: '⚙️'
    },
    {
      title: 'Consultoría IT',
      description: 'Asesoramiento experto en tecnología para optimizar tus procesos y tomar decisiones estratégicas.',
      icon: '💡'
    },
    {
      title: 'E-commerce',
      description: 'Plataformas de comercio electrónico completas con pasarelas de pago y gestión de inventario.',
      icon: '🛒'
    },
    {
      title: 'Mantenimiento',
      description: 'Soporte continuo y actualizaciones para mantener tu software funcionando perfectamente.',
      icon: '🔧'
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
                  <div className="fs-1 mb-3">{service.icon}</div>
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