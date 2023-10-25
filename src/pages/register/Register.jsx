import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registerSchemas } from '../../../Server/schemas/auth.schema';
import { useNavigate } from 'react-router-dom';
import ErrorMessages from '../../ErrorMessages/ErrorMessages';
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [user_name, setUserName] = useState();
  const [user_lastname, setUserlastname] = useState();
  const [user_email, setUserEmail] = useState();
  const [user_password, setUserPassword] = useState();
  const [errors, setErrors] = useState({
    user_name: '',
    user_lastname: '',
    user_email: '',
    user_password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      user_name,
      user_lastname,
      user_email,
      user_password,
    };

    try {
      registerSchemas.parse(formData);

      const response = await fetch('http://localhost:6700/playmontessori/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('User created successfully');
        navigate('/login');
      } 
    } catch (error) {
      if (error.issues) {
        const newErrors = {
          user_name: error.issues[0]?.message || '',
          user_lastname: error.issues[1]?.message || '',
          user_email: error.issues[2]?.message || '',
          user_password: error.issues[3]?.message || ''
        };
        setErrors(newErrors);
      } else {
        console.error('Validation error:', error);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit} className='formSubmit'> 
      <div className='labelForm'>Register</div>
      <ErrorMessages errors={errors} />
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label> Name</Form.Label>
        <Form.Control type="text"  onChange={(e) => setUserName(e.target.value)} placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastname">
        <Form.Label> Lastname</Form.Label>
        <Form.Control type="text"  onChange={(e) => setUserlastname(e.target.value)} placeholder="Enter Lastname" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  onChange={(e) => setUserEmail(e.target.value)} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We`ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={(e) => setUserPassword(e.target.value)} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox"> 
        <Form.Check type="checkbox" label="Accept terms and conditions" required />
      </Form.Group>
      
      <div className='buttonSubmit'>
        <Button variant="primary" type="submit" className='buttonLogin'>
          Submit
        </Button>
    
      </div>
    </Form>
  );
}

export default Register;
