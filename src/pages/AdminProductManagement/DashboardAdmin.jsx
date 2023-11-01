import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Accordion, Dropdown, Button } from "react-bootstrap";
import ClickCounter from "../../Components/Counter/counter";
import { Link } from "react-router-dom";
import './DashboardAdmin.css'


        const cookieString = document.cookie;
        const tokenValue = cookieString.split('=')[1];


function DashboardAdmin() {

const [products, setProducts] = useState([]);
const [selectedAge, setSelectedAge] = useState('All');
const [ageMapping, setAgeMapping] = useState({}); // Para almacenar la correspondencia de IDs a rangos de edades


useEffect(() => {
  // Realizar una solicitud al servidor para obtener la correspondencia de edades
  fetch('https://playmontessori.onrender.com/playmontessori/ages',  
    { headers: {
    'Authorization': `${tokenValue}`
  }
})
    .then((response) => response.json())
    .then((data) => {
      // Crear un objeto de mapeo de IDs a rangos de edades
      const ageMapping = {};
      data.forEach((age) => {
        ageMapping[age.id] = age.age_range;
      });
      setAgeMapping(ageMapping);
    })
    .catch((error) => {
      console.error("Error al obtener la correspondencia de edades:", error);
    });
}, []);

useEffect(() => {
  const url = selectedAge === 'All'
    ? 'https://playmontessori.onrender.com/playmontessori/products/'
    : `https://playmontessori.onrender.com/playmontessori/ages/${selectedAge}/products/`;

  fetch(url, {
    headers: {
    'Authorization': `${tokenValue}`
  }
})
    .then((response) => response.json())
    .then((data) => {
      setProducts(data);
    })
    .catch((error) => {
      console.error("Error al obtener los productos:", error);
    });
}, [selectedAge]);

const updateCount = (productId, newCount) => {
  const productToUpdate = products.find((product) => product.id === productId);

  if (productToUpdate) {
    const updatedProduct = { ...productToUpdate, product_stock: newCount };

    fetch(`https://playmontessori.onrender.com/playmontessori/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `${tokenValue}`
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Compra");
        } else {
          console.log("ERROR ");
        }
      })
      .catch((error) => {
        console.log("ERROR EN LA SOLICITUD", error);
      });
  }
};

     // Función para eliminar un producto
  const deleteProduct = (productId) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este producto?")) {
      // Realizar la solicitud de eliminación al servidor
      fetch(`https://playmontessori.onrender.com/playmontessori/products/${productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `${tokenValue}`
        }
      })
        .then((response) => {
          if (response.ok) {
            // Producto eliminado con éxito, actualiza la lista de productos
            const updatedProducts = products.filter((product) => product.id !== productId);
            setProducts(updatedProducts);
            console.log("Producto eliminado");
          } else {
            console.log("Error al eliminar el producto");
          }
        })
        .catch((error) => {
          console.log("Error en la solicitud de eliminación", error);
        });
    }
  };


    return (
        <Container>
          <a className="add" href="#add">Click to add product</a>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="buttonLogin">
              Age Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSelectedAge('All')}>All</Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedAge('0-1')}>0-1</Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedAge('1-2')}>1-2</Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedAge('2-3')}>2-3</Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedAge('3-4')}>3-4</Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedAge('4-5')}>4-5</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Row className="rowcard">
            {products.map((product) => (
              <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Card className="mb-4">
                  <Card.Img src={product.image.secure_url} alt={product.image} width="300" height="300"/>
                  <Card.Body>
                    <Card.Title className="cardTitle">{product.product_title}</Card.Title>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Read More</Accordion.Header>
                        <Accordion.Body>
                          <Card.Text className="brand">Brand: {product.product_brand}</Card.Text>
                          {product.product_description}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <Card.Text className="age">Age: {ageMapping[product.ageFilterId]}</Card.Text>
                    <Card.Text className="price">Price:  {product.product_price} €</Card.Text>
    
                    <ClickCounter
                      initialCount={product.product_stock}
                      onUpdate={(newCount) => updateCount(product.id, newCount)}
                      className="adminButton"
                    />

                    <Button className= "deleteButton" variant="danger" onClick={() => deleteProduct(product.id)}>
                        Delete Product
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      );
}

export default DashboardAdmin