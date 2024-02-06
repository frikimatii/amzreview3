import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Carousel,
  Dropdown,
  Nav
} from "react-bootstrap";
import data_informatica from "./db_mascotas.json";
import "./card.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faComment} from '@fortawesome/free-solid-svg-icons'


function CardProduc2() {
    const [, setSelectedProduct4] = useState(null);
    const [comments, setComments] = useState({});


  const handleProductSelect4 = (productId) => {
    setSelectedProduct4(productId);
  };

  const addComment = (productId, comment) => {
    setComments((prevComments) => ({
      ...prevComments,
      [productId]: [...(prevComments[productId] || []), comment],
    }));
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="info" id="dropdown-basic" className="m-4">
          lista de Productos
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {data_informatica.map((x, i) => (
            <Nav.Link href={`#${x.afiliado}`} key={i}  onClick={() => handleProductSelect4(x.afiliado)} className="m-1">
              {x.titulo}
            </Nav.Link>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <div>
        {data_informatica.map((x, i) => (
          <Container key={x.id} id={x.afiliado} className="box mb-3">
            <Row>
              <Col md={5} className="d-flex align-items-center ">
                <div className="d-flex justify-content-center  ">
                  <Col md={4}>
                    <Carousel className="carousel-inner">
                      <Carousel.Item>
                        <img
                          className="d-block w-100 h-100 carousel-inner "
                          src={x.img1}
                          alt={x.titulo}
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100 h-100 "
                          src={x.img2}
                          alt={x.titulo}
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100 h-100 "
                          src={x.img3}
                          alt={x.titulo}
                        />
                      </Carousel.Item>
                    </Carousel>
                  </Col>
                </div>
              </Col>

              <Col md={7} className=" ">
                <Card style={{ width: "20 rem" }} className="mb-5 tarjeta">
                  <Card.Body className="">
                    <Card.Title className="text-center fs-1 fw-bold">
                      {x.titulo}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted fs-5 text-center">
                      {x.descripcion}
                    </Card.Subtitle>
                    <Card.Text>
                      <p className="fst-italic m-3">{x.review}</p>
                    </Card.Text>
                    <div className="d-flex justify-content-end">
                      <Button className="comprar" size="lg">
                      <a
                              href={x.afiliado}
                              target={x.afiliado}
                              className="text-reset"
                            ><FontAwesomeIcon icon={faCartShopping}/>  Comprar</a>
                      </Button>
                    </div>
                    <Container className="justify-content-center">
                      <Row>
                        <Col>
                          <div className="progress-bar-container" style={{width: "30%" , borderRadius: "50px"  , backgroundColor: "black"}}>
                            <div className="progress-bar" >
                              <div
                                className="progress"
                                style={ { width: `${x.calificacion}%`} }
                              ></div>
                            </div>
                          </div>
                          <p className="fw-bold ">Calificacion: {x.calificacion / 10}</p>
                        </Col>
                      </Row>
                    </Container>
                                      {/* Sección de comentarios */}
                                      <div>
                      <h5>Ayuda con tu comentario:</h5>
                      {comments[x.id] && comments[x.id].map((comment, index) => (
                        <div key={index} className="comment">
                          {comment}
                        </div>
                      ))}
                      {/* Formulario para agregar comentarios */}
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          const newComment = e.target.comment.value;
                          addComment(x.id, newComment);
                          e.target.comment.value = '';
                        }}
                      >
                        <input type="text" name="comment" placeholder="Añade un comentario" />
                        <button type="submit" className="comment-button" >  <FontAwesomeIcon icon={faComment}/>  Comentar</button>
                      </form>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        ))}
      </div>
    </>
  );
}

export default CardProduc2;
