import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/images/crownicon.png';
import './navbar.css';

function AppNavbar({ scrollToSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    scrollToSection(section);
    setExpanded(false); // ✅ collapse menu on click
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded((prev) => !prev)}
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container className="position-relative d-flex justify-content-between align-items-center">
        {/* Desktop Nav Left */}
        <Nav className="d-none d-lg-flex gap-3">
          <Nav.Link onClick={() => handleNavClick('hero')}>Home</Nav.Link>
          <Nav.Link onClick={() => handleNavClick('howitworks')}>How it Works</Nav.Link>
          <Nav.Link onClick={() => handleNavClick('featured')}>Featured</Nav.Link>
        </Nav>

        {/* Center Logo */}
        <Navbar.Brand className="mx-auto">
          <img src={logo} alt="Worthy by Yanira" className="navbar-logo" />
        </Navbar.Brand>

        {/* Desktop Nav Right */}
        <Nav className="d-none d-lg-flex gap-3">
          <Nav.Link onClick={() => handleNavClick('categories')}>Shop</Nav.Link>
          <Nav.Link onClick={() => handleNavClick('about')}>About</Nav.Link>
          <Nav.Link onClick={() => handleNavClick('contact')}>Contact</Nav.Link>
        </Nav>

        {/* Mobile Menu */}
        <div className="d-lg-none">
          <Navbar.Toggle aria-controls="main-navbar">
            <span className="navbar-toggler-icon" />
          </Navbar.Toggle>
          <Navbar.Collapse id="main-navbar" className="mt-2">
            <Nav className="flex-column text-center w-100">
              <Nav.Link onClick={() => handleNavClick('hero')}>Home</Nav.Link>
              <Nav.Link onClick={() => handleNavClick('howitworks')}>How it Works</Nav.Link>
              <Nav.Link onClick={() => handleNavClick('featured')}>Featured</Nav.Link>
              <Nav.Link onClick={() => handleNavClick('categories')}>Shop</Nav.Link>
              <Nav.Link onClick={() => handleNavClick('about')}>About</Nav.Link>
              <Nav.Link onClick={() => handleNavClick('contact')}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
