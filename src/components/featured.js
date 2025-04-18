import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const featuredProducts = [
  { name: 'Custom Mug', price: '$12.99', img: '/images/mug1.jpg' },
  { name: 'Sticker Pack', price: '$6.99', img: '/images/sticker1.jpg' },
  { name: 'T-Shirt Design', price: '$19.99', img: '/images/shirt1.jpg' },
];

function Featured() {
  return (
    <section style={{ padding: '80px 0' }}>
      <Container>
        <h2 className="text-center mb-5">Featured Products</h2>
        <Row xs={1} sm={2} md={3} className="g-4">
          {featuredProducts.map((product, idx) => (
            <Col key={idx}>
              <Card className="h-100 text-center">
                <Card.Img variant="top" src={product.img} alt={product.name} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.price}</Card.Text>
                  <Button variant="primary">View</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Featured;
