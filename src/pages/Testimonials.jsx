import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

function Testimonials() {
  const testimonials = [
    {
      name: "Roberto Sánchez",
      position: "CEO",
      company: "Quesería San Miguel",
      text: "El sistema de monitoreo que desarrollaron transformó completamente nuestra producción. Ahora tenemos control total sobre cada lote y hemos reducido los errores en un 80%.",
      rating: 5
    },
    {
      name: "Laura Martínez",
      position: "Directora de Marketing",
      company: "EcoStyle Boutique",
      text: "Nuestra tienda online superó todas las expectativas. El sistema de recomendaciones es increíble y nuestras ventas aumentaron un 150%.",
      rating: 5
    },
    {
      name: "Dr. Miguel Ruiz",
      position: "Director Médico",
      company: "MediConnect Health",
      text: "La app de telemedicina nos permitió llegar a pacientes en zonas remotas. La calidad de las videoconsultas es excelente y el sistema cumple con todos los estándares de seguridad.",
      rating: 5
    },
    {
      name: "Patricia Flores",
      position: "Directora Académica",
      company: "Instituto Tecnológico",
      text: "El sistema de gestión educativa digitalizó todos nuestros procesos. Los padres están encantados y los profesores ahorran horas en tareas administrativas.",
      rating: 5
    },
    {
      name: "Fernando Gutiérrez",
      position: "Gerente General",
      company: "Sabor Gourmet Group",
      text: "El dashboard de analytics nos dio visibilidad completa de nuestras 15 sucursales. Las predicciones de demanda nos ayudan a optimizar compras y reducir desperdicios.",
      rating: 5
    },
    {
      name: "Sofía Ramírez",
      position: "Fundadora",
      company: "Boutique Artesanal",
      text: "Trabajar con este equipo fue una experiencia increíble. Entendieron perfectamente nuestra visión y la llevaron a la realidad. El sitio web es hermoso y rápido.",
      rating: 5
    }
  ]

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <FaStar key={index} style={{ color: '#FFD700', fontSize: '1rem' }} />
    ))
  }

  return (
    <section className="py-5 bg-light" id="testimonios">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Lo Que Dicen Nuestros Clientes</h2>
          <p className="lead text-muted">
            Testimonios reales de clientes satisfechos
          </p>
        </div>

        <Row className="g-4">
          {testimonials.map((testimonial, index) => (
            <Col key={index} md={6} lg={4}>
              <Card 
                className="h-100 border-0 shadow-sm"
                style={{
                  transition: 'transform 0.3s ease',
                }}
              >
                <Card.Body className="p-4">
                  {/* Quote icon */}
                  <div className="mb-3">
                    <FaQuoteLeft 
                      style={{ 
                        fontSize: '2rem', 
                        color: '#353535',
                        opacity: 0.3
                      }} 
                    />
                  </div>

                  {/* Rating */}
                  <div className="mb-3">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Testimonial text */}
                  <Card.Text 
                    className="text-muted mb-4"
                    style={{ 
                      fontSize: '0.95rem',
                      lineHeight: '1.6'
                    }}
                  >
                    "{testimonial.text}"
                  </Card.Text>

                  {/* Client info */}
                  <div className="mt-auto border-top pt-3">
                    <div className="fw-bold" style={{ color: '#2D4654' }}>
                      {testimonial.name}
                    </div>
                    <div className="text-muted" style={{ fontSize: '0.85rem' }}>
                      {testimonial.position}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#468189' }}>
                      {testimonial.company}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Stats de satisfacción */}
        <div className="mt-5">
          <Row className="text-center g-4">
            <Col md={4}>
              <div className="p-3">
                <h3 className="fw-bold mb-2" style={{ color: '#468189', fontSize: '2.5rem' }}>
                  98%
                </h3>
                <p className="text-muted mb-0">Satisfacción del Cliente</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-3">
                <h3 className="fw-bold mb-2" style={{ color: '#468189', fontSize: '2.5rem' }}>
                  4.9/5
                </h3>
                <p className="text-muted mb-0">Calificación Promedio</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-3">
                <h3 className="fw-bold mb-2" style={{ color: '#468189', fontSize: '2.5rem' }}>
                  95%
                </h3>
                <p className="text-muted mb-0">Clientes que Recomiendan</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Testimonials