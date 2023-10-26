import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../assets/imgLogo/logoredondosinfondo.png'
import Login from '../../assets/imgFooter/User-Icon.png'
import './NavBar.css'

function NavBar() {
  return (
   
      <Container className='container-navbar'>

        <Navbar.Brand><Link to="/"><img 
              alt=""
              src={Logo}
              width="80"
              height="80"
              className="d-inline-block align-top"
            />PlayMontessori</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

        </Navbar.Collapse>
      </Container>
  
  );
}

export default NavBar;