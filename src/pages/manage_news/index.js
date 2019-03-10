import React, { Component } from 'react';
import axios from 'axios';

export default class NewsPanel extends Component {
   constructor(props) {
      super(props);
      this.state = {  }
   }

   async componentDidMount(){
      const response = await axios.get('http://auth-api-nodejs.herkouapp.com/manage_news', {
         headers: {
            "Authorization": localStorage.getItem('token')
         }
      })

      console.log(response)
   }

   render() { 
      return (
         <h1>LOGUEI?</h1>
      );
   }
}
