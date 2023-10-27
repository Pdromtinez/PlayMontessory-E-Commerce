import { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"; // Importa useNavigate
import './AddProductsForm.css'

const AddProductForm = () => {
  const navigate = useNavigate(); 

    const { register, handleSubmit, formState: { errors } } = useForm();
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
        product_stock: parseInt(data.product_stock),
        ageFilterId: data.ageFilterId
      
      }
      
        const response = await fetch('https://playmontessori.onrender.com/playmontessori/products', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        console.log(data);
        alert('Product saved succesfully');
        
      } else {
        console.error('Error al enviar los datos del producto:', response);
      }

} catch (error) {
        console.error("Error al enviar los datos del producto:", data);
      }
    } 

  return (
    <div className="d-flex justify-content-center align-items-center formSubmit">
    <div>
      <h2 id="add" className="text-center mb-4 loginLabel add">Add Product</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="product">
          <Form.Label>Insert image</Form.Label>
          <Form.Control
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            {...register("product_title")}
            required
          />
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            {...register("product_description")}
            required
          />
          <Form.Label>Brand</Form.Label>
          <Form.Control
            type="text"
            {...register("product_brand")}
            required
          />
          <Form.Label>Ages</Form.Label>
          <Form.Select as={Col} md="8" aria-label="Default select example" required defaultValue="" {...register("ageFilterId")}>
            <option value="" disabled>Ages</option>
            <option value="All">All</option>
            <option value="0-1">0-1</option>
            <option value="1-2">1-2</option>
            <option value="2-3">2-3</option>
            <option value="3-4">3-4</option>
            <option value="4-5">4-5</option>
          </Form.Select>

          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            {...register("product_price")}
            required
          />
          <Form.Label>Stock</Form.Label>
          <Form.Control
            type="number"
            {...register("product_stock")}
            required
          />
        </Form.Group>
        <div className="buttons">
        <Button className= 'buttonSubmit buttonLogin' variant="warning" type="submit"> {/* Cambio de color a naranja */}
          Add Product
        </Button>
        <Link to="/" className=" btn btn-secondary ml-2 buttonSubmit buttonProducts">View Products</Link> {/* Botón secundario de Bootstrap */}
        </div>
      </Form>
    </div>
  </div>
);
};
export default AddProductForm;






