import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Accordion } from "react-bootstrap";
import ClickCounter from "../Counter/counter";
import Dropdown from 'react-bootstrap/Dropdown';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6700/playmontessori/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);


  const updateCount = (productId, newCount) => {
    const productToUpdate = products.find((product) => product.id === productId);
  
    if (productToUpdate) {
      const updatedProduct = { ...productToUpdate, product_stock: newCount };
  
      fetch(`http://localhost:6700/playmontessori/products/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Cantidad actualizada");
          } else {
            console.log("ERROR AL ACTUALIZAR");
          }
        })
        .catch((error) => {
          console.log("ERROR EN LA SOLICITUD", error);
        });
    }
  };


  return (
    <Container>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Age Filter
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">All</Dropdown.Item>
        <Dropdown.Item href="#/action-1">0-1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">1-2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">2-3</Dropdown.Item>
        <Dropdown.Item href="#/action-3">3-4</Dropdown.Item>
        <Dropdown.Item href="#/action-3">4-5</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="mb-4">
              <Card.Img src={product.image.secure_url} alt={product.image} />
              <Card.Body>
                <Card.Title>{product.product_title}</Card.Title>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Read More</Accordion.Header>
                    <Accordion.Body>
                      {product.product_description}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Card.Text>Brand: {product.product_brand}</Card.Text>
                <Card.Text>Age: {product.ageFilterId}</Card.Text>
                <Card.Text>Price: €{product.product_price}</Card.Text>

                <ClickCounter
                  initialCount={product.product_stock}
                  onUpdate={(newCount) => updateCount(product.id, newCount)}
                  className="ClickCounter"
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
