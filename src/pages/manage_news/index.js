import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

import './style.css'

import ControlMenu from '../../components/ControlMenu'
import Footer from '../../components/Footer'

import { Button } from 'react-bootstrap'
import { FaEye, FaNewspaper } from 'react-icons/fa'

export default class NewsPanel extends Component {
   constructor(props) {
      super(props);
      this.state = { 
         authorized: false,
         page: 1,
         // Array that stores all news
         allNewsData: []
      }

   }

   async componentWillMount(){
      document.title = "Manage News"

      // Verify if there is a valid auth token and retrieve news data
      try{
         const response = await axios.get(`http://auth-api-nodejs.herokuapp.com/manage_news?page=${this.state.page}`, {
            headers: {
               "Authorization": localStorage.getItem('token')
            }
         })

         return this.setState({authorized: true, allNewsData: response.data.docs})
      }catch(err){
         return this.props.history.push('/401')
      }
   }

   render() { 
      return (
         // If there is authorization, the component will be shown
         this.state.authorized === true &&
         <React.Fragment>
            <ControlMenu {...this.props} />
            <div className="content-wrapper">
               <div className="display">
               <h2 className="main-header"> <FaNewspaper/> Manage news</h2>
                  <section className="news-box-wrapper">
                     <ul className="news-list">
                        {this.state.allNewsData.map((news)=> (
                           <li className="news-element" key={news._id}>
                              <p className="news-title">{news.title}</p>
                              <p className="news-lead">{news.lead}</p>
                              <div className="news-element-footer">
                                 <p className="news-author">Author: {news.author.name}</p>
                                 <Link to={`/view_news/${news._id}`} ><Button variant="primary" size="md"> <FaEye/> View more</Button></Link>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </section>
               </div>
               <Footer/>
            </div>
         </React.Fragment>
      );
   }
}
