import React from "react";
import { Container, Navbar, Image } from "react-bootstrap";
import imgLogo from "./AmzBanner.jpg";

import "./flow.css";

function NavScrollExample() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
      <Container fluid className="d-flex justify-content-center align-items-center">
        <Navbar.Brand href="#" className="logo text-center">
          <Image
            src={imgLogo}
            alt="Logo"
            className="img-fluid me-2 animate__animated animate__flipInX animate__slower animate__infinite"
            style={{ width: '75px', height: '75px', borderRadius: '60px' }}
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
