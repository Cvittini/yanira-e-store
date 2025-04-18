import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/images/crownicon.png';
import './navbar.css';

function AppNavbar({ scrollToSection }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}>
      <Container className="position-relative d-flex justify-content-between align-items-center">

        {/* Desktop Nav Left */}
        <Nav className="d-none d-lg-flex gap-3">
          <Nav.Link onClick={() => scrollToSection('hero')}>Home</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('howitworks')}>How it Works</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('featured')}>Featured</Nav.Link>
        </Nav>

        {/* Center Logo */}
        <Navbar.Brand className="mx-auto">
          <img src={logo} alt="Worthy by Yanira" className="navbar-logo" />
        </Navbar.Brand>

        {/* Desktop Nav Right */}
        <Nav className="d-none d-lg-flex gap-3">
          <Nav.Link onClick={() => scrollToSection('categories')}>Shop</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('about')}>About</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('contact')}>Contact</Nav.Link>
        </Nav>

        {/* Mobile */}
        <div className="d-lg-none">
  <Navbar.Toggle aria-controls="main-navbar" />
  <Navbar.Collapse id="main-navbar" className="mt-2">
    <Nav className="flex-column text-center w-100">
      <Nav.Link onClick={() => scrollToSection('hero')}>Home</Nav.Link>
      <Nav.Link onClick={() => scrollToSection('howitworks')}>How it Works</Nav.Link>
      <Nav.Link onClick={() => scrollToSection('featured')}>Featured</Nav.Link>
      <Nav.Link onClick={() => scrollToSection('categories')}>Shop</Nav.Link>
      <Nav.Link onClick={() => scrollToSection('about')}>About</Nav.Link>
      <Nav.Link onClick={() => scrollToSection('contact')}>Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</div>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
