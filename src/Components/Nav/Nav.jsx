import Nav from 'react-bootstrap/Nav';

function NavList() {
return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Products</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">About Us</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavList;