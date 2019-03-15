import React, { Component } from 'react';

import '../style.css'

import axios from 'axios'

import {
   Form, Button,
} from 'react-bootstrap'

import {
   FaKey, FaUserAlt, FaStar, FaAt
} from 'react-icons/fa'

import Info from '../../../components/Info'

export default class ResetPassword extends Component{
   constructor(props){
      super(props)

      this.state = {
         infoType:'',
         infoReport: '',
         token: ''
      }
      this.resetPwd = this.resetPwd.bind(this)
   }

   componentDidMount(){
      document.title = "Reset Password"
   }

   resetPwd(e){
      e.preventDefault()

      const form = Array.from(e.target.elements).map(inp => inp.value)
      const [cEmail, newPwd, cNewPwd] = form

      if(newPwd !== cNewPwd)
         return this.setState({infoReport: 'Passwords must match!'})
      
      try{
         const response = axios.post(`http://auth-api-nodejs.herokuapp.com/auth/reset_password/${this.props.match.params.token}`, {
            cEmail, newPwd
         })

         this.setState({infoReport: response.data.ok, infoType: 'success'})

         return this.props.history.push("/")
      }catch(err){
         return this.setState({infoReport: err.response.data.error, infoType: 'error'})
      }
   }

   render(){
      return(
         <div className="form-window">
            <div className="form-wrapper">
               <h4> <FaUserAlt/> Reset password</h4>
               <hr></hr>
               <Info infoType={this.state.infoType} msg={this.state.infoReport} />
               <Form method="post" name="reset_password" onSubmit={this.resetPwd}>
                  <Form.Group controlId="email">
                     <Form.Label><FaAt/> Confirm email </Form.Label>
                     <Form.Control type="email" name="email" placeholder="example@email.com" required></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="password">
                     <Form.Label><FaKey/> New password </Form.Label>
                     <Form.Control type="password" name="password" placeholder="********" required></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="password">
                     <Form.Label><FaKey/> Confirm new password</Form.Label>
                     <Form.Control type="password" name="password" placeholder="********" required></Form.Control>
                  </Form.Group>
                  <Button variation="primary" className="btn-block" type="submit"><FaStar/> Reset</Button>
               </Form>
            </div>
         </div>
      )
   }
}