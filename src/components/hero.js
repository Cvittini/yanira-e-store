import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './hero.css';

function Hero({ scrollToSection }) {
  return (
    <div className="hero" style={{ padding: '100px 0'}}>
      <Container className="text-center">
        <h1>Worthy by Yanira</h1>
        <p className="lead">
          Printable products made with love — stickers, cups, apparel & more.
        </p>
        <Button
          className="mt-4"
          size="lg"
          onClick={() => scrollToSection('categories')}
        >
          Shop Now
        </Button>
      </Container>
    </div>
  );
}

export default Hero;
