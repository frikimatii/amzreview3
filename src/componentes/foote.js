import React from "react";
import Container from "react-bootstrap/Container";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-5 bg-dark text-light p-4 footer">
      <Container fluid className="text-center">
        <div className="mb-3">
          <a href="https://www.facebook.com/profile.php?id=100094886682039" className="text-light me-3">
            <FaFacebook size={30} />
          </a>
          <a href="https://twitter.com/reviewAMZReview" className="text-light me-3">
            <FaTwitter size={30} />
          </a>
          <a href="https://www.instagram.com/amzreview3/" className="text-light">
            <FaInstagram size={30} />
          </a>
        </div>
        <p>&copy; 2024 AMZ Review. Todos los derechos reservados.</p>
        <p>@frikimatii | matibiencomodo@gmail.com</p>
        <p><a href="/privacy">Política de Privacidad</a> | <a href="/terms">Términos de Servicio</a></p>
      </Container>
    </footer>
  );
}

export default Footer;
