import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="text-light py-2" style={{backgroundColor:"#202020"}}>
      <Container>
        <p className="m-0 text-center mr-5">Copyright &copy; 2024 PizzaWalla.com</p>
      </Container>
    </footer>
  );
};

export default Footer;
