import Nav from 'react-bootstrap/Nav';
import './Nav.css'
import { Link } from 'react-router-dom';

function NavList() {
return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link><Link to= "/products">Products</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">About Us</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2"><Link to="/login">Login</Link></Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavList;