import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../assets/imgLogo/logoredondosinfondo.png'
import Login from '../../assets/imgFooter/User-Icon.png'
import './NavBar.css'

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='container-navbar'>

        <Navbar.Brand><Link to="/"><img 
              alt=""
              src={Logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            /></Link>PlayMontessori</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link href="#link"><Link to="/"><img 
              alt=""
              src={Login}
              width="30"
              height="30"
              className="d-inline-block align-top"
            /></Link>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;