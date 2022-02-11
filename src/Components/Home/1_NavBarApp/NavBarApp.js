import React from "react";
import "./NavbarApp.css";
import icono from "../../assets/img/favicon.ico";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBarApp = () => {
  return (
    <div>
      <Navbar expand="lg">
        
        <Container>
          
          <img classname="logo" src={icono} />
          <Navbar.Brand href="/">Deportes 4.0</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="center">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
              <Link className="nav-link" to="/">
                Investigación
              </Link>
              <Link className="nav-link" to="/">
                Noticias
              </Link>
            </Nav>

            <Nav className="right_part">
              <Link className="nav-link" to="/signup">
                Iniciar sesión
              </Link>

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarApp;
