import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaLinkedin, FaMapMarkerAlt, } from 'react-icons/fa'
import { IoMdMail, IoMdChatbubbles  } from "react-icons/io";
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

function Services() {

  return (
    <section className="py-5" id="servicios">
      <Container>

        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Hablemos de tu proyecto</h2>
          <p className="lead text-muted">
            Estamos aquí para ayudarte a escalar tu software. Envíanos un mensaje o visítanos en nuestras oficinas.
          </p>
        </div>
        
        <Row>
          <Col xs={12} md={4}>
            <Stack gap={5}>
              <Card className="h-100 shadow-sm border-1">
                <Card.Body className="text-center p-4">
                  <Card.Title className="fw-bold mb-3">
                    <IoMdMail />
                    Escribenos
                  </Card.Title>
                    <Card.Text className="text-muted">
                      Nuestro equipo de soporte responde en menos de 2 horas.
                    </Card.Text>
                </Card.Body>
              </Card>

              <Card className="h-100 shadow-sm border-1">
                <Card.Body className="text-center p-4">
                  <Card.Title className="fw-bold mb-3">
                    <FaMapMarkerAlt />
                    Visítanos
                  </Card.Title>
                    <Card.Text className="text-muted">
                      Visita nuestras oficinas y tengamos una charla
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="h-100 shadow-sm border-1">
                <Card.Body className="text-center p-4">
                  <Card.Title className="fw-bold mb-3">
                    <IoMdChatbubbles />
                    Redes Sociales
                  </Card.Title>
                    <Card.Text className="text-muted">
                      <FaLinkedin />
                    </Card.Text>
                </Card.Body>
              </Card>
            </Stack>
          </Col>



          <Col xs={12} md={8}>
            <Card className="h-100 shadow-sm border-1 p-4">

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="fw-bold mb-3">
                    Nombre
                  </Form.Label>
                    <Form.Control type="text" placeholder="Ej. Rafael Villegas" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="fw-bold mb-3">
                    Email
                  </Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="fw-bold mb-3">
                    Asunto
                  </Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>
                        Selecciona un asunto
                      </option>
                      <option value="1">
                        Desarrollo Web
                      </option>
                      <option value="2">
                        Aplicaciones Móviles
                      </option>
                      <option value="3">
                        Software Personalizado
                      </option>
                      <option value="4">
                        Consultoría IT
                      </option>
                      <option value="5">
                        E-commerce
                      </option>
                      <option value="6">
                        Mantenimiento
                      </option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label className="fw-bold mb-3">
                    Mensaje
                  </Form.Label>
                    <Form.Control as="textarea" rows={3} style={{ resize: "none" }}/>
                </Form.Group>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Services