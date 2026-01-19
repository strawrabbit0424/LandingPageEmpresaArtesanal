import { Container, Row, Col, Card, Carousel } from 'react-bootstrap'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

function Testimonials() {
  const testimonials = [
    {
      name: "Roberto Sánchez",
      position: "CEO, Quesería San Miguel",
      company: "Quesería San Miguel",
      text: "El sistema de monitoreo que desarrollaron transformó completamente nuestra producción. Ahora tenemos control total sobre cada lote y hemos reducido los errores en un 80%. La inversión se pagó sola en los primeros 3 meses.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      project: "Sistema IoT de Monitoreo"
    },
    {
      name: "Laura Martínez",
      position: "Directora de Marketing",
      company: "EcoStyle Boutique",
      text: "Nuestra tienda online superó todas las expectativas. El sistema de recomendaciones con IA es increíble y nuestras ventas aumentaron un 150%. El equipo fue profesional, creativo y siempre disponible para ajustes.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      project: "E-commerce con IA"
    },
    {
      name: "Dr. Miguel Ángel Ruiz",
      position: "Director Médico",
      company: "MediConnect Health",
      text: "La app de telemedicina nos permitió llegar a pacientes en zonas remotas. La calidad de las videoconsultas es excelente y el sistema de expedientes digitales cumple con todos los estándares de seguridad. Muy recomendados.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
      project: "App de Telemedicina"
    },
    {
      name: "Patricia Flores",
      position: "Directora Académica",
      company: "Instituto Tecnológico del Valle",
      text: "El sistema de gestión educativa digitalizó todos nuestros procesos. Los padres están encantados con el portal y los profesores ahorran horas en tareas administrativas. El soporte técnico ha sido excepcional.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      project: "Sistema Educativo"
    },
    {
      name: "Fernando Gutiérrez",
      position: "Gerente General",
      company: "Sabor Gourmet Group",
      text: "El dashboard de analytics nos dio visibilidad completa de nuestras 15 sucursales. Las predicciones de demanda nos ayudan a optimizar compras y reducir desperdicios. ROI positivo desde el primer mes.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      project: "Dashboard Analytics"
    },
    {
      name: "Sofía Ramírez",
      position: "Fundadora",
      company: "Boutique Artesanal",
      text: "Trabajar con este equipo fue una experiencia increíble. Entendieron perfectamente nuestra visión y la llevaron a la realidad. El sitio web es hermoso, rápido y ha triplicado nuestras ventas online.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      project: "E-commerce Personalizado"
    }
  ]

  // Agrupa los testimonios de 3 en 3 para el carrusel
  const groupedTestimonials = []
  for (let i = 0; i < testimonials.length; i += 3) {
    groupedTestimonials.push(testimonials.slice(i, i + 3))
  }

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <FaStar key={index} style={{ color: '#FFD700', fontSize: '0.9rem' }} />
    ))
  }

  return (
    <section className="py-5 bg-light" id="testimonios">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Lo Que Dicen Nuestros Clientes</h2>
          <p className="lead text-muted">
            Historias reales de éxito que nos motivan a seguir mejorando
          </p>
        </div>

        <Carousel 
          interval={6000} 
          pause="hover"
          indicators={true}
          nextIcon={
            <span className="carousel-control-custom">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="#468189"/>
                <path d="M15 10L25 20L15 30" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          }
          prevIcon={
            <span className="carousel-control-custom">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="#468189"/>
                <path d="M25 10L15 20L25 30" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          }
        >
          {groupedTestimonials.map((group, groupIndex) => (
            <Carousel.Item key={groupIndex}>
              <Row className="g-4 pb-5 px-3">
                {group.map((testimonial, index) => (
                  <Col key={index} md={4}>
                    <Card 
                      className="h-100 border-0 shadow-sm testimonial-card"
                      style={{
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Card.Body className="p-4 d-flex flex-column">
                        {/* Quote icon */}
                        <div className="mb-3">
                          <FaQuoteLeft 
                            style={{ 
                              fontSize: '2rem', 
                              color: '#468189',
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
                          className="text-muted mb-4 flex-grow-1"
                          style={{ 
                            fontSize: '0.95rem',
                            lineHeight: '1.6'
                          }}
                        >
                          "{testimonial.text}"
                        </Card.Text>

                        {/* Client info */}
                        <div className="d-flex align-items-center mt-auto">
                          <img 
                            src={testimonial.image}
                            alt={testimonial.name}
                            style={{
                              width: '60px',
                              height: '60px',
                              borderRadius: '50%',
                              objectFit: 'cover',
                              border: '3px solid #468189'
                            }}
                          />
                          <div className="ms-3">
                            <div className="fw-bold" style={{ color: '#2D4654' }}>
                              {testimonial.name}
                            </div>
                            <div className="text-muted" style={{ fontSize: '0.85rem' }}>
                              {testimonial.position}
                            </div>
                            <div style={{ fontSize: '0.8rem', color: '#468189' }}>
                              {testimonial.company}
                            </div>
                          </div>
                        </div>

                        {/* Project tag */}
                        <div className="mt-3">
                          <small 
                            className="px-3 py-1 rounded"
                            style={{
                              backgroundColor: '#F0F4F5',
                              color: '#468189',
                              fontSize: '0.75rem',
                              fontWeight: '600'
                            }}
                          >
                            {testimonial.project}
                          </small>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Stats de satisfacción */}
        <div className="mt-5">
          <Row className="text-center">
            <Col md={4}>
              <div 
                className="p-4 rounded"
                style={{
                  backgroundColor: 'white',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}
              >
                <h3 className="fw-bold mb-2" style={{ color: '#468189', fontSize: '2.5rem' }}>
                  98%
                </h3>
                <p className="text-muted mb-0">Satisfacción del Cliente</p>
              </div>
            </Col>
            <Col md={4}>
              <div 
                className="p-4 rounded"
                style={{
                  backgroundColor: 'white',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}
              >
                <h3 className="fw-bold mb-2" style={{ color: '#468189', fontSize: '2.5rem' }}>
                  4.9/5
                </h3>
                <p className="text-muted mb-0">Calificación Promedio</p>
              </div>
            </Col>
            <Col md={4}>
              <div 
                className="p-4 rounded"
                style={{
                  backgroundColor: 'white',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}
              >
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