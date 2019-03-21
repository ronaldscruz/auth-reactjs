import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './style.css'

import {
   Navbar, Nav, Form, Button
} from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'

import {
   FaPlusCircle,
   FaDoorOpen,
   FaUsersCog,
   FaToolbox
} from 'react-icons/fa'

// Menu made for management page

export default class ControlMenu extends Component{
   constructor(props){
      super(props)

      this.state = {}

      this.quitSession = this.quitSession.bind(this)
   }

   quitSession(){
      if(!(window.confirm("Are you sure you want to quit?")))
         return

      return this.props.history.push('/')
   }

   render(){
      return(
         <div className="menu">
            <Navbar bg="dark" variant="dark" expand="lg" text="white">
               <Link to="/manage_news"><Navbar.Brand><FaUsersCog/> News Admin </Navbar.Brand></Link>
               <Navbar.Toggle aria-controls="header-menu"></Navbar.Toggle>
               <Navbar.Collapse id="header-menu">
                  <Nav className="mr-auto">
                     <LinkContainer to="/manage_news/">
                        <Nav.Link><FaToolbox/>manage</Nav.Link>  
                     </LinkContainer> 
                     <LinkContainer to="/create_news/">
                        <Nav.Link><FaPlusCircle/>create</Nav.Link>
                     </LinkContainer>       
                  </Nav>
                  <Form inline>
                     <Button variant="outline-light btn-block" onClick={this.quitSession}><FaDoorOpen/>Quit</Button>
                  </Form>
               </Navbar.Collapse>
            </Navbar>
         </div>
      )
   }
}