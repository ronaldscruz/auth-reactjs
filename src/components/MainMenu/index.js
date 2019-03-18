import React, { Component } from 'react';
import './style.css'

import {
   Navbar, Nav, Form, Col, Button, InputGroup
} from 'react-bootstrap'

import {
   FaRegStar,
   FaNewspaper,
   FaAt,
   FaSignInAlt,
   FaKey
} from 'react-icons/fa'

export default class MainMenu extends Component{
   // This menu was made for a possible "client-friendly" homepage
   render(){
      return(
         <div className="menu">
            <Navbar bg="dark" variant="dark" expand="lg" text="white">
               <Navbar.Brand href="/"><FaNewspaper/>Today!</Navbar.Brand>
               <Navbar.Toggle aria-controls="header-menu"></Navbar.Toggle>
               <Navbar.Collapse id="header-menu">
                  <Nav className="mr-auto">
                     <Nav.Link href="/"><FaRegStar/>news</Nav.Link>
                  </Nav>
                  <Form inline>
                     <Form.Row>
                        <Col md={5} sm={12}>
                           <Form.Group>
                              <InputGroup size="sm">
                                 <InputGroup.Prepend>
                                    <InputGroup.Text> <FaAt/></InputGroup.Text>
                                 </InputGroup.Prepend>
                                 <Form.Control type="email" name="email" placeholder="E-mail" size="sm" required/>                    
                              </InputGroup>
                           </Form.Group>
                        </Col>

                        <Col md={5} sm={12}>
                           <Form.Group>
                              <InputGroup size="sm">
                                 <InputGroup.Prepend>
                                    <InputGroup.Text> <FaKey/> </InputGroup.Text>
                                 </InputGroup.Prepend>
                                 <Form.Control type="password" name="password" placeholder="••••••••" size="sm" required/>                    
                              </InputGroup>
                           </Form.Group>                          
                        </Col>

                        <Col md={2} sm={12}>
                           <Button variation="primary" size="sm" type="submit" block> <FaSignInAlt/> Login</Button>
                        </Col>
                     </Form.Row>
                  </Form>
               </Navbar.Collapse>
            </Navbar>
         </div>
      )
   }
}