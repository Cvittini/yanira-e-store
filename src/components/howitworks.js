import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBoxOpen, FaPaintBrush, FaTruck } from 'react-icons/fa';

function HowItWorks() {
  const steps = [
    {
      icon: <FaBoxOpen size={40} />,
      title: '1. Choose a Product',
      desc: 'Select from mugs, shirts, stickers, and more.',
    },
    {
      icon: <FaPaintBrush size={40} />,
      title: '2. Upload Your Design',
      desc: 'Add your image, logo, or custom message.',
    },
    {
      icon: <FaTruck size={40} />,
      title: '3. We Print & Deliver',
      desc: 'We’ll handle the printing and ship it to you.',
    },
  ];

  return (
    <section >
      <Container>
        <h2 className="text-center mb-5">How It Works</h2>
        <Row className="text-center">
          {steps.map((step, idx) => (
            <Col md={4} key={idx}>
              <div className="mb-3">{step.icon}</div>
              <h5>{step.title}</h5>
              <p>{step.desc}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default HowItWorks;
