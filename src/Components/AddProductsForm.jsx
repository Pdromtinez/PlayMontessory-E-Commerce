import { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"; // Importa useNavigate


const AddProductForm = () => {
  const navigate = useNavigate(); // Obtiene la función de navegación

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageData, setImageData] = useState('');
    const [imageUrl, setImageUrl] = useState('')


      const handleImageChange = (e) => {
      const imageFile = e.target.files[0];
      const reader = new FileReader();

    reader.onload = (event) => {
      const base64String = event.target.result.split(',')[1];
      setImageUrl(base64String);
    };

    reader.readAsDataURL(imageFile);
    };

    
    
    const onSubmit = async (data) => {
      try {
        console.log(imageUrl)
      data = {
        image: imageUrl,
        product_title: data.product_title,
        product_description: data.product_description,
        product_brand: data.product_brand,
        product_price : parseFloat(data.product_price),
        product_stock: parseInt(data.product_stock)
      }
      
        const response = await fetch('http://localhost:6700/playmontessori/products', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        console.log(data)
      } else {
        console.error('Error al enviar los datos del producto:', response);
      }

} catch (error) {
        console.error("Error al enviar los datos del producto:", data);
      }
    } 

  
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
    <div style={{ width: "400px" }}>
      <h2 className="text-center mb-4">Agregar Producto</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
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

            {...register("product_title")}
            required
          />
          <Form.Label>Descripción del Producto</Form.Label>
          <Form.Control
            type="text"
            {...register("product_description")} 
            required
          />
          <Form.Label>Marca del Producto</Form.Label>
          <Form.Control
            type="text"
            {...register("product_brand")}
            required
          />
          <Form.Select as={Col} md="8" aria-label="Default select example" required defaultValue="">
              <option value="" disabled>Ages</option>
              <option {...register("ages_filter")}>0-1</option>
          </Form.Select> 

          <Form.Label>Precio del Producto</Form.Label>
          <Form.Control
            type="number"
            {...register("product_price")}
            required
          />
          <Form.Label>Stock del Producto</Form.Label>
          <Form.Control
            type="number"
            {...register("product_stock")}
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
