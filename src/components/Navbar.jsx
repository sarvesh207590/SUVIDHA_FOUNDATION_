import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Navbar.css'; // Include custom CSS

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" >
        <div className="navbar-logo">
          <img
            src="suvidha_logo3.png"
            alt="Suvidha Logo"
            className="navbar-logo-img "
          />
        </div>
       

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto d-flex align-items-center  p-3  bg-dark">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/#events">Events</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/donors">Our Donors</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/OurTeam">Our Team</Nav.Link>


            <div className="button-group ms-3">
              <Button variant="warning" className="me-2">Donate Now</Button>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform">
              <Button variant="outline-light">Apply for Internship</Button></a>
            </div>

          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
