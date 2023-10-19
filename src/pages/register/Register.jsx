import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Register() { 

  const [user_name, setUserName] = useState("")
  const [user_lastname, setUserlastname] = useState("")
  const [user_email, setUserEmail] = useState("")
  const [user_password,setUserPassword] = useState("")

  const handleSummit = async(e)=>{
    e.preventDefault()

    const response = await fetch ("http://localhost:6700/playmontessori/register",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({user_name, user_lastname,  user_email, user_password, rolesId}),
      }) 
      if (response.ok){
        const data = await response.json()
      }else {console.log("Register it's fail")} 
  }

  return (
    <Form onSubmit={handleSummit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={user_email} onChange={(e)=>setUserEmail(e.target.value)} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Register
