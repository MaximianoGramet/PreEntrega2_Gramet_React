import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from './Carrito/Cart';
import { Link, NavLink } from "react-router-dom"

function Navegacion() {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
      <div className="navbar-brand">
        <Link style={{ textDecoration: "none" }} to={"/"}>Mefcafe</Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* BOTONES ACá */}
        <NavLink  className='p-1 text-light' style={{ textDecoration: "none" }} to={"category/herbivoro"}>Herbivoros</NavLink> 
        {/* BOTON ACÁ */}
        <NavLink   className='p-3 text-light' style={{ textDecoration: "none" }} to={"category/carnivoro"}>Carnivoros</NavLink> 
        <Nav.Link href='#' className='p-1 text-light'>Promos</Nav.Link>
        <Cart/>
      </Container>
    </Navbar>
  );
}

export default Navegacion