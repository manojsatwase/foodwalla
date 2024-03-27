import {Link} from 'react-router-dom';
import { Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

import Logo from '../assets/img/logo.png';
import UserPic from '../assets/userpic.png'


const Header = () => {
  const [searchText,setSearchText] = useState('');
  const dispatch = useDispatch();

  const Logout = () => {
      //dispatch(logoutUserAPI());
  }

  const onChangeHandler = ({target:{value}}) => {
    setSearchText(value)
  }

  return (
    <Navbar expand="lg" bg="primary" variant='light' className="bg-body-tertiary">
    <Container>
      <Navbar.Brand>
        <Link to="/">
            <img src={Logo} alt='logo' />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
          {/* Conditional rendering based on user authentication */}
          {true ? (
            <Navbar.Collapse id="navbarScroll">
              <Nav className="m-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                <Form className="d-flex" style={{width:"250px"}}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={searchText}
                    onChange={onChangeHandler}
                  />
                </Form>
              </Nav>
              {/* Cart icon and link */}
              <Link to="/menu/cart" className="nav-link cart-link pl-2">
                <i className="bi bi-cart"></i>
              </Link>
              <Link to="/menu" className='pl-2'>
                  Menu
              </Link>
              {
                true &&(
                  <>
                    <img src={UserPic} className='userProfile' lazy="loading" alt='user' />
                    <NavDropdown title={"manoj satwase"} id="navbarScrollingDropdown"> 
                      <Link className='p-4' to="/myprofile">My Profile</Link>
                      {/* <NavDropdown.Divider /> */}
                      {/* Admin only see this page */}
                      {/* <Link className='p-4' to="/admin">Admin</Link> */}
                      <NavDropdown.Divider />
                      <Link className='p-4' to="/orders">Orders</Link>
                      {/* Admin only see this page */}
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                  </>
                )
              }
             
            </Navbar.Collapse>
          ) : (
            <Link className='ml-auto' to="/login">Login</Link>
          )}
      </Container>
      </Navbar>
  )
}

export default Header