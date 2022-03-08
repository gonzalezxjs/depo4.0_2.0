import React, { useEffect } from "react";
import "./NavbarApp.css";
import icono from "../../assets/img/logo.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBarApp = () => {

  useEffect(() => {
    if (window.location.href == "http://localhost:3000/signin"){
      console.log(window.location.href);
      document.getElementById( "login_btn" ).style.display = 'none';
    }else{
      document.getElementById( "login_btn" ).style.display = 'block';
    }
  }, [window.location.href == "http://localhost:3000/signin"])
  

  return (
    <div>
      <Navbar expand="lg">
        
        <Container>
          
          <img class="logo" src={icono} />
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

            <Nav  id="login_btn"  className="right_part">
              <Link onClick={NavBarApp} className="nav-link" to="/signin">
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
