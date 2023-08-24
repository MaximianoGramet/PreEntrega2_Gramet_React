import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import carrito from '../assets/carrito.png';

function Navegacion() {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Mefcafe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav.Link href="#home" className='text-light'>Promos</Nav.Link>
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end' >
          <Navbar.Text>
          <img src={carrito} width='32px' height='32px'/>
          </Navbar.Text>
          <p className='text-light ps-3 pt-3'>5</p>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion