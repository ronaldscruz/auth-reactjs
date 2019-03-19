import React, { Component } from 'react';
// import axios from 'axios';

import './style.css'

// import ControlMenu from '../../../components/ControlMenu'
// import Footer from '../../../components/Footer'

class NewsCreate extends Component {
   constructor(props) {
      super(props);
      this.state = { 
         // authorized: false,
      }
   }

   // async componentWillMount(){
   //    document.title = "Create news"

   //    try{
   //       await axios.get("http://auth-api-nodejs.herokuapp.com/manage_news", {
   //       headers:{
   //          'Authorization': localStorage.getItem('token')
   //          }
   //       })

   //       return this.setState({ authorized: true })
   //    }catch(err){
   //       return console.log(err)
   //       // return this.props.history.push('/401')
   //    }
   // }

   render() { 
      return (
         // this.state.authorized === true &&
         // <React.Fragment>
         //    <ControlMenu/>
         //       <div className="content-wrapper">
         //          <div className="display">
         //             <h1>Done.</h1>
         //          </div>
         //       </div>
         //    <Footer/>
         // </React.Fragment>
         <h1>oi</h1>
      );
   }
}
 
export default NewsCreate;
