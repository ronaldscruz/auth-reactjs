import React, { Component } from 'react';

import './style.css'
import { FaGithubAlt } from 'react-icons/fa'

export default class Footer extends Component {
   render() { 
      return (
         <div className="footer">
            <div className="footer-content">
               <p>Criado por: <a href="https://github.com/ronaldscruz" target="_blank"><FaGithubAlt/>ronaldscruz</a> </p>
            </div>
         </div>
      );
   }
}
 