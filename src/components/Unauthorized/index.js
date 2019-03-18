import React, { Component } from 'react';
import './style.css'

import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaLock } from 'react-icons/fa'

class Unauthorized extends Component {
   componentDidMount(){
      document.title = "Error 401"
   }

   render() { 
      return ( 
         <div className="wrapper">
            <div className="window">
               <div className="window-header">
                  <h3><FaLock/>Oops!</h3>
                  <Link to="/"><Button variant="warning" size="sm"> ⮜ Login </Button></Link>
               </div>    
                  <hr></hr>
               <h5> You must login to access this area. </h5>
            </div>
         </div>
       );
   }
}
 
export default Unauthorized;