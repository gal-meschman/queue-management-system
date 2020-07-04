import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./clalit-logo.png";
import "./nav.css";

export default () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Nav className='mr-auto'>
        <Nav.Link as={Link} to='/'>
          Home
        </Nav.Link>
        <Nav.Link as={Link} to='/reception'>
          Reception
        </Nav.Link>
        <Nav.Link as={Link} to='/service'>
          Service
        </Nav.Link>
      </Nav>
      <Nav.Link as={Link} to='/'>
        <Nav className='ml-auto'>
          <img src={Logo} alt='clalit logo' />
        </Nav>
      </Nav.Link>
    </Navbar>
  );
};
