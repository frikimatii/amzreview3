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

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="info" id="dropdown-basic" className="m-4">
          Lista de Productos
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {data_informatica.map((x, i) => (
            <Nav.Link href={`#${x.afiliado}`} key={i}  onClick={() => setSelectedProduct4(x.afiliado)} className="m-1">
              {x.titulo}
            </Nav.Link>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <div>
        {data_informatica.map((product) => (
          <Container key={product.id} id={product.afiliado} className="box mb-3">
            <Row>
              <Col md={5} className="d-flex align-items-center ">
                <div className="d-flex justify-content-center  ">
                  <Col md={4}>
                    <Carousel className="carousel-inner">
                      <Carousel.Item>
                        <img
                          className="d-block w-100 h-100 carousel-inner "
                          src={product.img1}
                          alt={product.titulo}
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100 h-100 "
                          src={product.img2}
                          alt={product.titulo}
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100 h-100 "
                          src={product.img3}
                          alt={product.titulo}
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
                      {product.titulo}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted fs-5 text-center">
                      {product.descripcion}
                    </Card.Subtitle>
                    <Card.Text>
                      <p className="fst-italic m-3">{product.review}</p>
                    </Card.Text>
                    <div className="d-flex justify-content-end">
                      <Button className="comprar" size="lg">
                      <a
                              href={product.afiliado}
                              target={product.afiliado}
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
                                style={ { width: `${product.calificacion}%`} }
                              ></div>
                            </div>
                          </div>
                          <p className="fw-bold ">Calificacion: {product.calificacion / 10}</p>
                        </Col>
                      </Row>
                    </Container>
                                      {/* Sección de comentarios */}
                                      <div>
                      <h5>Ayuda con tu comentario:</h5>
                      {comments[product.id] && comments[product.id].map((comment, index) => (
                        <div key={index} className="comment">
                          {comment}
                        </div>
                      ))}
                      {/* Formulario para agregar comentarios */}
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          const newComment = e.target.comment.value;
                          setComments((prevComments) => ({
                            ...prevComments,
                            [product.id]: [...(prevComments[product.id] || []), newComment],
                          }));
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
