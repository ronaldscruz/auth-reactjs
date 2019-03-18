import React, { Component } from 'react';
import axios from 'axios';

import './style.css'

import ControlMenu from '../../components/ControlMenu'
import Footer from '../../components/Footer'

export default class NewsPanel extends Component {
   constructor(props) {
      super(props);
      this.state = { 
         authorized: false,

         // Array that stores all news
         allNewsData: []
      }

   }

   async componentWillMount(){
      document.title = "Manage News"

      // Verify if there is a valid auth token
      try{
         const response = await axios.get('http://auth-api-nodejs.herokuapp.com/manage_news', {
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
         // If there is authorization, the component will be shown
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
