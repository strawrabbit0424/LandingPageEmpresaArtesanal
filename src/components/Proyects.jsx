import { Container, Carousel, Card, Row, Col, Badge } from 'react-bootstrap'

function Proyects() {
  const projects = [
    {
      id: 1,
      title: "Sistema de Monitoreo para Producción de Queso Artesanal",
      client: "Quesería San Miguel",
      description: "Desarrollamos un sistema inteligente de monitoreo que revolucionó el control de calidad en la producción de queso artesanal. La plataforma registra automáticamente temperatura, humedad y pH en cada etapa del proceso, detectando desviaciones en tiempo real y creando un historial completo de cada lote.",
      solution: "Control de calidad automatizado · Reducción del 80% en errores de proceso · Trazabilidad completa del producto",
      technologies: ["IoT", "React", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&h=500&fit=crop",
      category: "IoT & Automatización"
    },
    {
      id: 2,
      title: "Plataforma E-commerce con IA para Moda Sustentable",
      client: "EcoStyle Boutique",
      description: "Creamos una tienda online de última generación con sistema de recomendaciones basado en inteligencia artificial. La plataforma analiza preferencias de los usuarios y sugiere productos personalizados, aumentando las ventas en un 150%.",
      solution: "Recomendaciones con IA · Pasarela de pagos múltiple · Gestión de inventario en tiempo real",
      technologies: ["React", "Python"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
      category: "E-commerce & IA"
    },
    {
      id: 3,
      title: "App Móvil de Telemedicina con Videoconsultas",
      client: "MediConnect Health",
      description: "Desarrollamos una aplicación móvil que conecta pacientes con médicos especialistas mediante videoconsultas HD. Incluye expediente médico digital, recordatorios de medicamentos y chat seguro encriptado.",
      solution: "Videoconsultas en tiempo real · Expediente digital · Cumplimiento HIPAA",
      technologies: ["React Native", "WebRTC", "Firebase", "AWS"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
      category: "Salud Digital"
    },
    {
      id: 4,
      title: "Sistema de Gestión Educativa en la Nube",
      client: "Instituto Tecnológico del Valle",
      description: "Plataforma integral para gestión académica que digitaliza inscripciones, calificaciones, asistencias y comunicación escuela-padres. Incluye portal para estudiantes, profesores y administrativos con acceso desde cualquier dispositivo.",
      solution: "Gestión académica completa · Portal multi-rol · Reportes automatizados",
      technologies: ["React", "Laravel", "MySQL", "Azure"],
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop",
      category: "Educación"
    },
    {
      id: 5,
      title: "Dashboard Analytics para Cadena de Restaurantes",
      client: "Sabor Gourmet Group",
      description: "Sistema de business intelligence que centraliza datos de ventas, inventario y satisfacción del cliente de 15 sucursales. Visualizaciones interactivas y predicciones de demanda mediante machine learning para optimizar compras.",
      solution: "Analytics en tiempo real · Predicción de demanda · Gestión multi-sucursal",
      technologies: ["React", "D3.js", "Python", "MongoDB"],
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop",
      category: "Business Intelligence"
    }
  ]

  // Agrupa los proyectos de 2 en 2 para el carrusel
  const groupedProjects = []
  for (let i = 0; i < projects.length; i += 2) {
    groupedProjects.push(projects.slice(i, i + 2))
  }

  return (
    <section className="py-5 bg-light" id="proyectos">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Proyectos Destacados</h2>
          <p className="lead text-muted">
            Casos de éxito que transformaron negocios con tecnología innovadora
          </p>
        </div>

        <Carousel 
          interval={5000} 
          pause="hover" 
          className="proyects-carousel"
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
          {groupedProjects.map((group, groupIndex) => (
            <Carousel.Item key={groupIndex}>
              <Row className="g-4 pb-5 px-3">
                {group.map((project) => (
                  <Col key={project.id} md={6}>
                    <Card className="h-100 shadow-sm border-0 proyects-card">
                      <div style={{ height: '180px', overflow: 'hidden' }}>
                        <Card.Img 
                          variant="top" 
                          src={project.image}
                          alt={project.title}
                          style={{ 
                            height: '100%', 
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease'
                          }}
                          className="proyects-image"
                        />
                      </div>
                      <Card.Body className="d-flex flex-column">
                        <div className="mb-2">
                          <Badge 
                            className="me-2"
                            style={{ 
                              backgroundColor: '#468189',
                              color: 'white'
                            }}
                          >
                            {project.category}
                          </Badge>
                        </div>
                        <Card.Title className="fw-bold mb-2">
                          {project.title}
                        </Card.Title>
                        <Card.Subtitle className="mb-3 text-muted">
                          Cliente: {project.client}
                        </Card.Subtitle>
                        <Card.Text className="text-muted mb-3">
                          {project.description}
                        </Card.Text>
                        <div className="mb-3">
                          <small className="fw-bold" style={{ color: '#468189' }}>
                            ✓ {project.solution}
                          </small>
                        </div>
                        <div className="mt-auto">
                          <small className="text-muted">Tecnologías:</small>
                          <div className="mt-2">
                            {project.technologies.map((tech, index) => (
                              <Badge 
                                key={index} 
                                className="me-1 mb-1"
                                style={{ 
                                  backgroundColor: '#2D4654',
                                  color: 'white',
                                  fontSize: '0.75rem'
                                }}
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  )
}

export default Proyects