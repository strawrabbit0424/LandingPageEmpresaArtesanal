import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaComments, FaFileAlt, FaCode, FaRocket, FaHandshake } from 'react-icons/fa'

function Process() {
  const steps = [
    {
      number: "01",
      title: "Consulta Inicial",
      description: "Entendemos tus necesidades, objetivos y visión del proyecto.",
      icon: <FaComments />,
      color: "#468189"
    },
    {
      number: "02",
      title: "Propuesta",
      description: "Diseñamos una propuesta detallada con cronograma y costos.",
      icon: <FaFileAlt />,
      color: "#468189"
    },
    {
      number: "03",
      title: "Desarrollo",
      description: "Construimos tu solución con actualizaciones constantes del avance.",
      icon: <FaCode />,
      color: "#468189"
    },
    {
      number: "04",
      title: "Pruebas",
      description: "Realizamos pruebas exhaustivas y refinamos cada detalle.",
      icon: <FaRocket />,
      color: "#468189"
    },
    {
      number: "05",
      title: "Entrega",
      description: "Desplegamos tu proyecto con capacitación y soporte continuo.",
      icon: <FaHandshake />,
      color: "#468189"
    }
  ]

  return (
    <section className="py-5 bg-light" id="proceso">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">¿Cómo Trabajamos?</h2>
          <p className="lead text-muted">
            Un proceso claro y transparente de 5 pasos para tu éxito
          </p>
        </div>

        {/* Desktop: Horizontal */}
        <div className="d-none d-lg-block position-relative px-4">
          {/* Línea horizontal */}
          <div 
            style={{
              position: 'absolute',
              top: '60px',
              left: '10%',
              right: '10%',
              height: '4px',
              backgroundColor: '#C4C4C4',
              zIndex: 1
            }}
          />
          
          <Row className="position-relative" style={{ zIndex: 2 }}>
            {steps.map((step, index) => (
              <Col key={index} lg className="text-center mb-4">
                <div className="process-step-horizontal">
                  {/* Círculo con número */}
                  <div 
                    className="process-circle mx-auto mb-3"
                    style={{ 
                      backgroundColor: step.color,
                      color: 'white',
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      boxShadow: '0 6px 20px rgba(70, 129, 137, 0.4)',
                      border: '5px solid white',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ fontSize: '2.5rem', marginBottom: '5px' }}>
                      {step.icon}
                    </div>
                    <div style={{ fontSize: '0.9rem' }}>
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Flecha entre pasos (excepto el último) */}
                  {index < steps.length - 1 && (
                    <div 
                      style={{
                        position: 'absolute',
                        top: '55px',
                        right: '-15%',
                        fontSize: '2rem',
                        color: '#468189',
                        fontWeight: 'bold',
                        zIndex: 3
                      }}
                    >
                      →
                    </div>
                  )}
                  
                  {/* Tarjeta con info */}
                  <Card 
                    className="border-0 shadow-sm process-card-horizontal mt-3"
                    style={{
                      transition: 'all 0.3s ease',
                      minHeight: '180px'
                    }}
                  >
                    <Card.Body className="p-3">
                      <Card.Title 
                        className="fw-bold mb-2" 
                        style={{ 
                          fontSize: '1.1rem',
                          color: '#2D4654'
                        }}
                      >
                        {step.title}
                      </Card.Title>
                      <Card.Text 
                        className="text-muted" 
                        style={{ fontSize: '0.9rem' }}
                      >
                        {step.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* Mobile: Vertical */}
        <div className="d-lg-none">
          {steps.map((step, index) => (
            <div key={index} className="mb-4 position-relative">
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start">
                    <div 
                      className="me-3"
                      style={{
                        backgroundColor: step.color,
                        color: 'white',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        flexShrink: 0,
                        boxShadow: '0 4px 15px rgba(70, 129, 137, 0.3)'
                      }}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <div 
                        className="mb-1"
                        style={{
                          color: step.color,
                          fontSize: '0.8rem',
                          fontWeight: 'bold'
                        }}
                      >
                        PASO {step.number}
                      </div>
                      <h5 className="fw-bold mb-2" style={{ color: '#2D4654' }}>
                        {step.title}
                      </h5>
                      <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              {index < steps.length - 1 && (
                <div className="text-center my-2">
                  <div style={{ color: '#468189', fontSize: '1.5rem' }}>↓</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Info de tiempos */}
        <div className="text-center mt-5">
          <div 
            className="p-4 rounded"
            style={{
              backgroundColor: 'white',
              border: `3px solid #468189`,
              boxShadow: '0 4px 15px rgba(70, 129, 137, 0.15)'
            }}
          >
            <h5 className="fw-bold mb-3" style={{ color: '#2D4654' }}>
              ⏱️ Tiempo Promedio de Desarrollo
            </h5>
            <Row className="text-center">
              <Col md={4}>
                <div className="mb-2" style={{ color: '#468189', fontSize: '2rem', fontWeight: 'bold' }}>
                  2-4
                </div>
                <div className="text-muted">Semanas<br/><small>Proyectos Pequeños</small></div>
              </Col>
              <Col md={4}>
                <div className="mb-2" style={{ color: '#468189', fontSize: '2rem', fontWeight: 'bold' }}>
                  1-2
                </div>
                <div className="text-muted">Meses<br/><small>Proyectos Medianos</small></div>
              </Col>
              <Col md={4}>
                <div className="mb-2" style={{ color: '#468189', fontSize: '2rem', fontWeight: 'bold' }}>
                  3-6
                </div>
                <div className="text-muted">Meses<br/><small>Proyectos Grandes</small></div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Process