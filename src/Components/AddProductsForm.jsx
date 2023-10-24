import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // Importa useNavigate

const AddProductForm = () => {
  const navigate = useNavigate(); // Obtiene la función de navegación

  const [productData, setProductData] = useState({
    product_title: "",
    product_description: "",
    product_brand: "",
    product_price: 0,
    product_stock: 0,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setProductData({
      ...productData,
      image: imageFile,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const formData = new FormData();
      formData.append('image', productData.image);
      formData.append('product_title', productData.product_title);
      formData.append('product_description', productData.product_description);
      formData.append('product_brand', productData.product_brand);
      formData.append('product_price', productData.product_price);
      formData.append('product_stock', productData.product_stock);

      const response = await fetch('http://localhost:6700/playmontessori/products', {
        method: 'POST',
        body: formData,
      });
  
      if (response.status === 200) {
        navigate('/products');
      } else {
        const data = await response.json();
        console.error("Error al enviar los datos del producto:", data);
      }
    } catch (error) {
      console.error("Error al enviar los datos del producto:", error);
    }
  };
  
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Agregar Producto</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="product">
            <Form.Label>Imagen del Producto</Form.Label>
            <Form.Control
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
            />
            <Form.Label>Nombre del Producto</Form.Label>
            <Form.Control
              type="text"
              name="product_title"
              value={productData.product_title}
              onChange={handleChange}
              required
            />
            <Form.Label>Descripción del Producto</Form.Label>
            <Form.Control
              type="text"
              name="product_description"
              value={productData.product_description}
              onChange={handleChange}
              required
            />
            <Form.Label>Marca del Producto</Form.Label>
            <Form.Control
              type="text"
              name="product_brand"
              value={productData.product_brand}
              onChange={handleChange}
              required
            />
            <Form.Label>Precio del Producto</Form.Label>
            <Form.Control
              type="number"
              name="product_price"
              value={productData.product_price}
              onChange={handleChange}
              required
            />
            <Form.Label>Stock del Producto</Form.Label>
            <Form.Control
              type="number"
              name="product_stock"
              value={productData.product_stock}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="warning" type="submit"> {/* Cambio de color a naranja */}
            Agregar Producto
          </Button>
          <Link to="/products" className="btn btn-secondary ml-2">Ver Productos</Link> {/* Botón secundario de Bootstrap */}
        </Form>
      </div>
    </div>
  );
};

export default AddProductForm;
