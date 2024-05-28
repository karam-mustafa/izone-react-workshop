import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link to={""}>Home</Link>
          <Link to={"/features"}>Features</Link>
          <Link to={"/pricing"}>Pricing</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
