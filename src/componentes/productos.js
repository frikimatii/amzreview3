import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Navproductos from "./navproductos";
import "./flow.css"; // Importa tu archivo de estilos CSS si aún no lo has hecho

function ProductosTodos() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center bg-body-tertiary ">
      {/* vh-100 asegura que ocupa el 100% de la altura visible */}
      <Container>
        <Navbar className="bg-transparent text-none">
          <Container className="d-flex justify-content-center">
            <Navbar.Brand href="#home" className="navbar-brand-styled">Producto</Navbar.Brand>
          </Container>
        </Navbar>
        <Navproductos />
      </Container>
    </div>
  );
}

export default ProductosTodos;
