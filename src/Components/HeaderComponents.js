import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import { BiCameraMovie } from "react-icons/bi";
import Container from 'react-bootstrap/Container';

const HeaderComponents = ({onTextChange,searchquery}) => {
  return <>
    
  <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand><BiCameraMovie /></Navbar.Brand>
          <Nav className="my-3 mx-auto">
          <Form.Control
            type="text"
            placeholder="Search"
            className=" mr-sm-2"
            value={searchquery}
            onChange={onTextChange}
          />
          </Nav>
        </Container>
      </Navbar>
  </>
}

export default HeaderComponents