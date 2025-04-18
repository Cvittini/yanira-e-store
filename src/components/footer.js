import React from 'react';
import { Container } from 'react-bootstrap';
import { FaInstagram, FaFacebookF, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#222', color: '#fff', padding: '40px 0' }}>
      <Container className="text-center">
        <div className="mb-3">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: '#fff', margin: '0 10px' }}>
            <FaInstagram size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: '#fff', margin: '0 10px' }}>
            <FaFacebookF size={20} />
          </a>
        </div>
        <p>
          <FaPhoneAlt style={{ marginRight: '5px' }} />
          (123) 456-7890
        </p>
        <p>
          <FaEnvelope style={{ marginRight: '5px' }} />
          hello@worthybyyanira.com
        </p>
        <small>© {new Date().getFullYear()} Worthy by Yanira. All rights reserved.</small>
      </Container>
    </footer>
  );
}

export default Footer;
