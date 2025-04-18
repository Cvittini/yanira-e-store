import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <section style={{ padding: '80px 0', backgroundColor: '#fdfdfd' }}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h2>About Us</h2>
            <p>
              At Worthy by Yanira, we specialize in unique printable products—from custom stickers to mugs, apparel, and more.
              Everything is made with care to help you express your creativity or brand with style.
            </p>
            <p>
              Whether you're shopping for fun or business, we offer high-quality, personalized items with seamless service.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
