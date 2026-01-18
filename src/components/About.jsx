import { Container, Row, Col } from 'react-bootstrap'

function About() {
  const stats = [
    { number: '5+', label: 'Años de Experiencia' },
    { number: '100+', label: 'Proyectos Completados' },
    { number: '50+', label: 'Clientes Satisfechos' },
    { number: '24/7', label: 'Soporte Técnico' }
  ]

  return (
    <section className="py-5 bg-light" id="nosotros">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="display-5 fw-bold mb-4">Sobre Nosotros</h2>
            <p className="lead mb-4">
              Somos una empresa de desarrollo de software comprometida 
              con la excelencia y la innovación.
            </p>
            <p className="text-muted mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id itaque autem illum nam magni quas, atque maiores aperiam maxime? Quisquam commodi voluptates, asperiores, pariatur aspernatur ab ratione necessitatibus quod qui, rem ad quo explicabo perferendis nulla. Adipisci optio ad atque cum excepturi quisquam vitae tenetur voluptatem! Nisi quaerat corporis, nostrum blanditiis ipsa iure nesciunt! Obcaecati asperiores nisi impedit, modi blanditiis veniam aliquam inventore minus, quibusdam reiciendis eligendi, non alias fuga consequuntur iure quisquam odio! Asperiores iure quasi corporis voluptas placeat, nobis accusantium quis ullam consequatur voluptatum provident vitae id? Omnis ab officia debitis! Porro necessitatibus doloremque labore quos exercitationem quia.
            </p>
            <p className="text-muted">
              lorem100
            </p>
          </Col>
          
          <Col lg={6}>
            <div className="bg-white rounded shadow p-4">
              <Row className="g-4">
                {stats.map((stat, index) => (
                  <Col key={index} xs={6}>
                    <div className="text-center">
                      <h3 className="display-4 fw-bold text-primary mb-2">
                        {stat.number}
                      </h3>
                      <p className="text-muted mb-0">{stat.label}</p>
                    </div>
                  </Col>
                ))}
              </Row>
              
              <div className="mt-5">
                <h5 className="fw-bold mb-3">Nuestros Valores</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">✓ Calidad y atención al detalle</li>
                  <li className="mb-2">✓ Comunicación transparente</li>
                  <li className="mb-2">✓ Innovación constante</li>
                  <li className="mb-2">✓ Compromiso con plazos</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About