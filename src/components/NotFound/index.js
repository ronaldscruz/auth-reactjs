import React, { Component } from 'react';
import './style.css'

import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaRobot } from 'react-icons/fa'

class NotFound extends Component {
   componentDidMount(){
      document.title = "Error 404"
   }

   render() { 
      return ( 
         <div className="wrapper">
            <div className="window">
               <div className="window-header">
                  <h3><FaRobot/>Oops!</h3>
                  <Link to="/"><Button variant="warning" size="sm"> ⮜ Home </Button></Link>
               </div>    
                  <hr></hr>
               <h5> Page not found :( </h5>
            </div>
         </div>
       );
   }
}
 
export default NotFound;