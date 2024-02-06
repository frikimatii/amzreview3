import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import imgLogo from "./AmzBanner.jpg";


import "./flow.css";

function NavScrollExample() {
  return (
    <Navbar
      bg="dark"
      expand="lg"
      className=""
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#" className="logo">
        <Image src={imgLogo} alt="Logo" className="img-fluid me-2 animate__animated animate__flipInX animate__slower animate__infinite " style={{ width: '75px', height: '75px', borderRadius: '60px' }} />
        </Navbar.Brand>
        <div className="lis">
        <Navbar.Toggle aria-controls="navbarScroll" />
      
          <Navbar.Collapse id="navbarScroll">
        
              <Nav
                style={{
                  maxHeight: "auto",
                  display: "flex",
                  alignItems: "end",
                }}
              >
                <Nav.Item>
                  <Nav.Link href="inico">Inicio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Informatica
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Mascotas
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Aire libre
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Hogar
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Belleza
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Juguetes
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Amazon Basic
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="redes">Redes</Nav.Link>
                </Nav.Item>
              </Nav>
       
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
