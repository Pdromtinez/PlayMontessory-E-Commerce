import { useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import "./login.css";
import { Link } from 'react-router-dom';
import { loginSchemas } from '../../../Server/schemas/auth.schema';
import { useNavigate } from 'react-router-dom';
import ErrorMessages from '../../ErrorMessages/ErrorMessages';
import ReactModal from 'react-modal';
function Login() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user_email, setEmail] = useState();
  const [user_password, setPassword] = useState();
  const [errors, setErrors] = useState({
    user_email: '',
    user_password: '',
  });
  const [incorrectPassword, setIncorrectPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      loginSchemas.parse({ user_email, user_password });
      const response = await fetch('http://localhost:6700/playmontessori/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_email, user_password }),
      });
      if (response.ok) {
        setIsModalOpen(true);
        setTimeout(() => {
          setIsModalOpen(false);
          navigate('/');
        }, 3000);
      }
      if (response.status === 401) {
          setIncorrectPassword('Incorrect password');
        }
    } catch (error) {
      if (error.issues) {
        const newErrors = {
          user_email: error.issues[0]?.message || '',
          user_password: error.issues[1]?.message || ''
        };
        setErrors(newErrors);
      } else {
        console.error('Validation error:', error);
      }
    }
  };
  return (
    <>
      <div className='formContainer'>
        <h2 className='loginLabel'>Welcome Back!</h2>
        <ErrorMessages errors={errors} incorrectPassword={incorrectPassword} user_password={user_password}
/>
        <Form onSubmit={handleSubmit} className="loginForm">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>E-mail:</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button className='buttonLogin' type="submit"
          >
            Login
          </Button>
        </Form>
      </div>
      <div className='account'>
        <h2 className='loginLabel'>You don`t have an account?</h2>
        <Link to="/register">
          <Button className='buttonLogin' type="submit">
            Sign Up For Free
          </Button>
        </Link>
        <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="login Successful Modal"
        ariaHideApp={false}
        className="login-modal"
      >
        <h2 className='login-sucess'>login Successful</h2>
      </ReactModal>
      </div>
    </>
  );
}
export default Login;