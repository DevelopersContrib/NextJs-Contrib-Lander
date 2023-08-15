"use client"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Navbar expand="lg"
      className={`bg-body-tertiary navbar-floating-scroll ${isScrolling ? 'scrolled' : ''}`}
    >
      <div className='container'>
        <Navbar.Brand href="#home">
          Virtualcomm.Com
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#link" className='link-outline'>Login</Nav.Link>
            <Nav.Link href="#link" className='link-btn'>Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default Navigation