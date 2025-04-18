import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const categories = [
  { name: 'Stickers', img: '/images/stickers.jpg' },
  { name: 'Mugs', img: '/images/mugs.jpg' },
  { name: 'T-Shirts', img: '/images/tshirts.jpg' },
  { name: 'Car Decals', img: '/images/decals.jpg' },
  { name: 'Business Signs', img: '/images/signs.jpg' },
  { name: 'Keychains', img: '/images/keychains.jpg' },
];

function Categories() {
  return (
    <section >
      <Container>
        <h2 className="text-center mb-5">Shop by Category</h2>
        <Row xs={1} sm={2} md={3} className="g-4">
          {categories.map((cat, idx) => (
            <Col key={idx}>
              <Card className="h-100 text-center">
                <Card.Img variant="top" src={cat.img} alt={cat.name} />
                <Card.Body>
                  <Card.Title>{cat.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Categories;
