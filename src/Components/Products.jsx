import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6700/playmontessori/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error);
      });
  }, []);

  return (
    <Container>
      <h1 className="mt-4 mb-4">Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="mb-4">
              <Card.Img src={product.image.secure_url} alt={product.image} />
              <Card.Body>
                <Card.Title>{product.product_title}</Card.Title>
                <Card.Text>{product.product_description}</Card.Text>
                <Card.Text>Brand: {product.product_brand}</Card.Text>
                <Card.Text>Price: ${product.product_price}</Card.Text>
                <Card.Text>Stock: {product.product_stock}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
