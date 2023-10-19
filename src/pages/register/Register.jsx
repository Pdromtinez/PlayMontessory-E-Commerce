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
      body: JSON.stringify({user_name, user_lastname,  user_email, user_password}),
      }) 
      if (response.ok){
        const data = await response.json()
      }else {console.log("Register it's fail")} 
  }

  return (

    <Form onSubmit={handleSummit}>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label> Name</Form.Label>
        <Form.Control type="text" value={user_name} onChange={(e)=>setUserName(e.target.value)} placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastname">
        <Form.Label> Lastname</Form.Label>
        <Form.Control type="text" value={user_lastname} onChange={(e)=>setUserlastname(e.target.value)} placeholder="Enter Lastname" />
        </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={user_email} onChange={(e)=>setUserEmail(e.target.value)} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={user_password} onChange={(e)=>setUserPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"> 
        <Form.Check type="checkbox" label="Accept terms and conditions" required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Register
