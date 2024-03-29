import { Link, NavLink } from 'react-router-dom';
import { Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import Logo from '../assets/img/logo.png';
import UserPic from '../assets/userpic.png';

import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  const Logout = () => {
    //dispatch(logoutUserAPI());
  }

  const onChangeHandler = ({ target: { value } }) => {
    setSearchText(value)
  }

  return (
    <Navbar expand="lg" bg="light" variant='light' className="sticky-top">
      <Container>
        <Navbar.Brand>
          <Link to="/" onClick={() => setTab("/")}>
            <img src={Logo} alt='logo' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        {/* Conditional rendering based on user authentication */}

        {true ? (
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Form className="d-flex" style={{ width: "250px" }}>
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
            <NavLink to="/" className='nav-link'>
              Home
            </NavLink>
            <NavLink to="/menu" className='nav-link'>
              Menu
            </NavLink>
            <NavLink to="/cart" className="nav-link cart-link pl-2">
              <i className="bi bi-cart"></i>
            </NavLink>
            <NavLink className='nav-link' to="/restaurants">
              Restaurants
            </NavLink>
            {
              false && (
                <>
                  <img src={UserPic} className='userProfile' lazy="loading" alt='user' />
                  <NavDropdown title={"manoj satwase"} id="navbarScrollingDropdown">
                    <NavLink className='p-4' to="/myprofile">
                      My Profile
                    </NavLink>
                    {/* Admin only see this page */}
                    {/* <NavLink className='p-4' to="/admin">Admin</NavLink> */}
                    <NavDropdown.Divider />
                    <NavLink className='p-4' to="/orders">
                      Orders
                    </NavLink>
                    {/* Admin only see this page */}
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
                  </NavDropdown>
                </>
              )
            }
          </Navbar.Collapse>
        ) : (
          <Link className='ml-auto' to="/login">
            Login
          </Link>
        )}
      </Container>
    </Navbar>
  )
}

export default Header;
