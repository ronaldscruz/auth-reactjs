import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import axios from 'axios'

import '../style.css'

import {
   Form, Button
} from 'react-bootstrap'

import {
   FaAt, FaEnvelope, FaUserAlt
} from 'react-icons/fa'

import Info from '../../../components/Info';

export default class ForgotPassword extends Component{

   constructor(props){
      super(props)

      this.state = {
         infoReport: '',
         infoType: '',
      }

      this.sendEmailToken = this.sendEmailToken.bind(this)
   }

   async sendEmailToken(e){
      e.preventDefault()
      
      const inputs = Array.from(e.target.elements).map(inp => inp.value)
      const [email] = inputs

      try{
         const response = await axios.post('http://auth-api-nodejs.herokuapp.com/auth/forgot_password', {
            email
         })

         this.setState({infoReport: response.data.ok, infoType: 'success'})
         
         setTimeout(() => {
            return this.props.history.push('/')
         },1500)
      }catch(err){
         this.setState({infoReport: err.response.data.error, infoType: 'error'})
      }
   }

   componentDidMount(){
      document.title = "Forgot Password"
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
               <Info msg={this.state.infoReport} infoType={this.state.infoType}/>
               <Form method="post" name="forgot_password" onSubmit={this.sendEmailToken}>
                  <Form.Group controlId="email">
                     <Form.Label><FaAt/> Enter a registered e-mail </Form.Label>
                     <Form.Control type="email" name="email" placeholder="example@email.com" required></Form.Control>
                  </Form.Group>
                  <Button variation="primary" className="btn-block" type="submit"><FaEnvelope/> Send token</Button>
               </Form>
            </div>
         </div>
      )
   }
}