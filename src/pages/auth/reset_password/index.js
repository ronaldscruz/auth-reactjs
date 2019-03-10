import React, { Component } from 'react';
import '../style.css'

import {
   Form, Button,
} from 'react-bootstrap'

import {
   FaKey, FaUserAlt, FaStar
} from 'react-icons/fa'

export default class ResetPassword extends Component{
   render(){
      return(
         <div className="form-window">
            <div className="form-wrapper">
               <h4> <FaUserAlt/> Reset password</h4>
               <hr></hr>
               <Form method="post" name="reset_password">
                  <Form.Group controlId="password">
                     <Form.Label><FaKey/> New password </Form.Label>
                     <Form.Control type="password" name="password" placeholder="********" required></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="password">
                     <Form.Label><FaKey/> Confirm password</Form.Label>
                     <Form.Control type="password" name="password" placeholder="********" required></Form.Control>
                  </Form.Group>
                  <Button variation="primary" className="btn-block"><FaStar/> Reset</Button>
               </Form>
            </div>
         </div>
      )
   }
}