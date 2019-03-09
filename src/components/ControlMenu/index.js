import React, { Component } from 'react';
import './style.css'

import {
   Navbar, Nav, Form, Button
} from 'react-bootstrap'

import {
   FaToolbox,
   FaPlusCircle,
   FaDoorOpen,
   FaUsersCog
} from 'react-icons/fa'

export default class ControlMenu extends Component{
   render(){
      return(
         <div className="menu">
            <Navbar bg="dark" variant="dark" expand="lg" text="white">
               <Navbar.Brand href="/"><FaUsersCog/> Admin </Navbar.Brand>
               <Navbar.Toggle aria-controls="header-menu"></Navbar.Toggle>
               <Navbar.Collapse id="header-menu">
                  <Nav className="mr-auto">
                     <Nav.Link href="/"><FaToolbox/>manage</Nav.Link>
                     <Nav.Link href="/new"><FaPlusCircle/>create</Nav.Link>
                  </Nav>
                  <Form inline>
                     <Button variant="outline-light btn-block"><FaDoorOpen/>Quit</Button>
                  </Form>
               </Navbar.Collapse>
            </Navbar>
         </div>
      )
   }
}