import React, { Component } from 'react';
import axios from 'axios';

import './style.css'

import ControlMenu from '../../components/ControlMenu'
import Footer from '../../components/Footer'

export default class NewsPanel extends Component {
   constructor(props) {
      super(props);
      this.state = { 
         authorized: false
      }
   }

   async componentWillMount(){
      document.title = "Manage News"

      try{
         await axios.get('http://auth-api-nodejs.herokuapp.com/manage_news', {
            headers: {
               "Authorization": localStorage.getItem('token')
            }
         })

         return this.setState({authorized: true})
      }catch(err){
         return this.props.history.push('/401')
      }
   }

   render() { 
      return (
         this.state.authorized === true &&
         <React.Fragment>
            <ControlMenu/>
            <div className="content-wrapper">
               <div className="display">
                  eae
               </div>

               <Footer/>
            </div>
         </React.Fragment>
      );
   }
}
