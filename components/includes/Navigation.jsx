"use client"
import Logo from '@/components/includes/Logo';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';

const Navigation = ({domain,logo}) => {
  const signup_link = 'https://www.contrib.com/signup/firststep?domain='+domain;
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
        <Logo domain={domain} logo={logo} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="https://www.contrib.com/crypto/login" className='link-outline'>Login</Nav.Link>
            <Nav.Link href={signup_link} className='link-btn'>Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default Navigation