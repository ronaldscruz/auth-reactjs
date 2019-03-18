import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Info from '../../components/Info'
import Footer from '../../components/Footer'

import axios from 'axios'

import './style.css'

import {
   Form, Button,
} from 'react-bootstrap'

import {
   FaAt, FaKey, FaSignInAlt, FaUserAlt
} from 'react-icons/fa'


export default class Auth extends Component {

   componentDidMount(){
      document.title = "Sign In"

      localStorage.removeItem('token')
   }

   constructor(props){
      super(props)

      this.state = {
         errorReport: ''
      }

      this.Auth = this.Auth.bind(this)
   }

   async Auth(e){
      e.preventDefault()

      let data = Array.from(e.target.elements).map((inp) => inp.value)
      const [email, password] = data

      try{
         const response = await axios.post('http://auth-api-nodejs.herokuapp.com/auth/authenticate', {
            email, password
         })

         const token = 'Bearer '+response.data.token
         localStorage.setItem('token', token)

         return this.props.history.push('/manage_news')
      }catch(err){
         this.setState({errorReport: err.response.data.error})
      }
   }

   render() { 
      return (
         <div className="form-window">
            <div className="form-wrapper">
               <h4> <FaUserAlt/> Enter your credentials</h4>
               <hr></hr>
               {/* <Error msg={this.state.errorReport}/> */}
               <Info msg={this.state.errorReport} infoType="error" />
               <Form method="post" name="auth" onSubmit={this.Auth} ref="auth">
                  <Form.Group controlId="email">
                     <Form.Label><FaAt/> E-mail </Form.Label>
                     <Form.Control type="email" name="email" placeholder="example@email.com" required></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="password">
                     <Form.Label><FaKey/> Password </Form.Label>
                     <Form.Control type="password" name="password" placeholder="********" required></Form.Control>
                     <Form.Text className="text-muted"> <Link to="/forgot_password">Forgot your password? Click here.</Link></Form.Text>
                  </Form.Group>
                  <Button variation="primary" className="btn-block" type="submit" ><FaSignInAlt/> Sign in</Button>
               </Form>
            </div>
            <Footer/>
         </div>
      );
   }
}
 