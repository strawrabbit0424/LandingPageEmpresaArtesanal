import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import AndresImg from '../assets/images/AndresC.jpg'
import RubiImg from '../assets/images/RubiT.jpg'
import NicoImg from '../assets/images/NicoleM.jpg'
import MonseImg from '../assets/images/MonseJ.jpg'

function Team() {
  const teamMembers = [
    {
      name: "Rubi Tejero",
      role: "CEO & Full Stack Developer",
      description: "Experta en arquitectura de software con más de 5 años de experiencia. Apasionada por crear soluciones innovadoras.",
      image: RubiImg,
      linkedin: "#",
      github: "#",
      email: "rubi@empresa.com"
    },
    {
      name: "Monserrat Jimenez",
      role: "Lead Frontend Developer",
      description: "Especialista en React y diseño UI/UX. Transforma ideas complejas en interfaces intuitivas y atractivas.",
      image: MonseImg,
      linkedin: "#",
      github: "#",
      email: "monserrat@empresa.com"
    },
    {
      name: "Nicole Morales",
      role: "DevOps Engineer",
      description: "Especialista en infraestructura cloud y CI/CD. Garantiza que los proyectos se desplieguen de forma segura y eficiente.",
      image: NicoImg,
      linkedin: "#",
      github: "#",
      email: "morales@empresa.com"
    },

    {
      name: "Said Dominguez",
      role: "Backend Developer",
      description: "Experto en Node.js y bases de datos. Construye APIs robustas y escalables que potencian aplicaciones de alto rendimiento.",
      image: AndresImg,
      linkedin: "#",
      github: "#",
      email: "said@empresa.com"
    }
    
  ]

  return (
    <section className="py-5" id="equipo">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Nuestro Equipo</h2>
          <p className="lead text-muted">
            Conoce a las personas detrás de cada proyecto exitoso
          </p>
        </div>

        <Row className="g-4">
          {teamMembers.map((member, index) => (
            <Col key={index} md={6} lg={3}>
              <Card 
                className="h-100 border-0 shadow-sm team-card"
                style={{
                  transition: 'all 0.3s ease',
                  overflow: 'hidden'
                }}
              >
                {/* Imagen con overlay */}
                <div 
                  className="position-relative team-image-wrapper"
                  style={{
                    overflow: 'hidden',
                    height: '300px'
                  }}
                >
                  <Card.Img 
                    variant="top" 
                    src={member.image}
                    alt={member.name}
                    style={{
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    className="team-image"
                  />
                  
                  {/* Overlay con redes sociales */}
                  <div 
                    className="team-overlay"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(70, 129, 137, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '15px',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    }}
                  >
                    <a 
                      href={member.linkedin}
                      className="text-white"
                      style={{
                        fontSize: '1.8rem',
                        transition: 'transform 0.2s ease'
                      }}
                    >
                      <FaLinkedin />
                    </a>
                    <a 
                      href={member.github}
                      className="text-white"
                      style={{
                        fontSize: '1.8rem',
                        transition: 'transform 0.2s ease'
                      }}
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-white"
                      style={{
                        fontSize: '1.8rem',
                        transition: 'transform 0.2s ease'
                      }}
                    >
                      <FaEnvelope />
                    </a>
                  </div>
                </div>

                <Card.Body className="text-center p-4">
                  <Card.Title className="fw-bold mb-1" style={{ fontSize: '1.2rem' }}>
                    {member.name}
                  </Card.Title>
                  <div 
                    className="mb-3 fw-semibold"
                    style={{
                      color: '#468189',
                      fontSize: '0.9rem'
                    }}
                  >
                    {member.role}
                  </div>
                  <Card.Text className="text-muted" style={{ fontSize: '0.9rem' }}>
                    {member.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Stats del equipo */}
        <div className="mt-5">
          <Row className="text-center g-4">
            <Col md={3} sm={6}>
              <div className="p-3">
                <h3 className="fw-bold mb-2" style={{ color: '#468189', fontSize: '2.5rem' }}>
                  5+
                </h3>
                <p className="text-muted mb-0">Años de Experiencia Combinada</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="p-3">
                <h3 className="fw-bold mb-2" style={{ color: '#468189', fontSize: '2.5rem' }}>
                  100%
                </h3>
                <p className="text-muted mb-0">Compromiso con la Calidad</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="p-3">
                <h3 className="fw-bold mb-2" style={{ color: '#468189', fontSize: '2.5rem' }}>
                  10+
                </h3>
                <p className="text-muted mb-0">Tecnologías Dominadas</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="p-3">
                <h3 className="fw-bold mb-2" style={{ color: '#468189', fontSize: '2.5rem' }}>
                  24/7
                </h3>
                <p className="text-muted mb-0">Disponibilidad de Soporte</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Team