import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../style.css'

import {
   Form, Button
} from 'react-bootstrap'

import {
   FaAt, FaEnvelope, FaUserAlt
} from 'react-icons/fa'

export default class ForgotPassword extends Component{

   componentDidMount(){
      console.log(localStorage.getItem('token'))
   }

   render(){
      return(
         <div className="form-window">
            <div className="form-wrapper">
               <div className="form-header">
                  <p id="form-title"> <FaUserAlt/> Forgot password</p>
                  <Link to="/"><Button variant="warning" size="sm"> ⮜ Return </Button></Link>
               </div>
               <hr></hr>
               <Form method="post" name="forgot_password">
                  <Form.Group controlId="email">
                     <Form.Label><FaAt/> Enter a registered e-mail </Form.Label>
                     <Form.Control type="email" name="email" placeholder="example@email.com" required></Form.Control>
                  </Form.Group>
                  <Button variation="primary" className="btn-block"><FaEnvelope/> Send token</Button>
               </Form>
            </div>
         </div>
      )
   }
}