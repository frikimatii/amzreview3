import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import imgLogo from "./logoAMZ.png";
import "./flow.css";

function ContainerExample(){
  return (
    <Container fluid className="fondo">
      <Row>
        <Col sm={6}>
          <div>
            <h1>AMZ Review</h1>
            <h2>Descubre las mejores reseñas de productos de Amazon</h2>
            <p className="text-center fw-bold p-3 align-items-center justify-content-center mt-4">
              Únete a nuestra comunidad de compradores en línea y descubre
              productos de alta calidad respaldados por Amazon. Haz de tus
              compras una experiencia satisfactoria en AmzReview.
            </p>
          </div>
        </Col>
        <Col sm={6} className="d-flex align-items-center justify-content-center">
          <Image src={imgLogo} alt="AMZ Logo" className="img-fluid animate__animated animate__flash animate__slower animate__infinite" />
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;
