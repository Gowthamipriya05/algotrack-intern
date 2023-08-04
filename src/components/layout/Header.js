import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink, useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup/mobile');
  };

  return (
    <>
    <Navbar expand="lg" className="bg-secondary mx-5 my-2 rounded">
      <Container fluid>
        <Navbar.Brand className='text-white' href="/">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle className='bg-white' aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className='mx-5 navlink' activeClassName='active' to="/">Home</NavLink>
            <NavLink className='me-3 navlink' activeClassName='active' to="/about">About Us</NavLink>
            <NavLink className='me-3 navlink' activeClassName='active' to="/contact">Contact Us</NavLink>
          </Nav>
            
            <Dropdown className='mx-2 my-1'>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Log In
      </Dropdown.Toggle>

      <Dropdown.Menu className='rounded'>
        <Dropdown.Item href="/login/customer/mobile">Customer</Dropdown.Item>
        <Dropdown.Item href="/login/partner">Partner</Dropdown.Item>
        <Dropdown.Item href="/login/admin">Admin</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Button onClick={handleSignUpClick} className='ms-2 me-4 my-1' variant="secondary">Sign Up</Button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header