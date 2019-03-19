import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

import './style.css'

import ControlMenu from '../../../components/ControlMenu'
import Footer from '../../../components/Footer'

import { Button, ButtonGroup } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { FaNewspaper, FaPencilAlt, FaTrash } from 'react-icons/fa'

export default class NewsPanel extends Component {
   constructor(props) {
      super(props);
      this.state = { 
         authorized: false,
         newsData: {}
      }

   }

   async componentWillMount(){
      document.title = "Manage News"

      // Verifies if there is a valid auth token and retrieve news data
      try{
         const response = await axios.get(`http://auth-api-nodejs.herokuapp.com/manage_news/${this.props.match.params.newsId}`, {
            headers: {
               "Authorization": localStorage.getItem('token')
            }
         })

         // "This var equals to: 18:40:14 (03/08/2019)"
         const date = `${response.data.date.slice(11, 13)}:${response.data.date.slice(14, 16)}:${response.data.date.slice(17, 19)} (${response.data.date.slice(5,7)}/${response.data.date.slice(8, 10)}/${response.data.date.slice(0, 4)})`

         return this.setState({authorized: true, newsData: {...response.data, date}})
      }catch(err){
         return this.props.history.push('/401')
      }
   }

   async delete(){
      if (!(window.confirm(`Are you sure do you want do delete this news?`)))
         return

      try{
         
      }catch(err){
         
      }
   }

   render() { 
      const {title, date, location, lead, body, author} = this.state.newsData
      console.log(title, date, author)
      return (
         // If there is authorization, the component will be shown
         this.state.authorized === true &&
         <React.Fragment>
            <ControlMenu/>
            <div className="content-wrapper">
               <div className="display">
                  <h2 className="main-header"> <FaNewspaper/> News details</h2>
                  <div className="control-buttons">
                     <ButtonGroup>
                        <LinkContainer to={`/manage_news/update/${this.props.match.params.newsId}`}>
                           <Button variant="primary" className="control-button"><FaPencilAlt/> Edit </Button>
                        </LinkContainer>
                        <Button variant="secondary" className="control-button" onClick={this.delete}><FaTrash/> Delete </Button>
                     </ButtonGroup>
                  </div> 
                  <section className="news-box-wrapper">
                     <article className="news-content">
                        <div className="news-box-header">
                           <div className="news-info"> 
                              <h1 className="news-title"> {title} </h1>
                              <p className="news-info">
                                 Updated at: {date} from {location} <br></br> Author: {author.name}
                              </p>
                           </div>
                        </div>
                        <p className="news-lead">
                           {lead}
                        </p>
                        <div className="news-body">
                           {body}
                        </div>
                     </article>
                  </section>
               </div>
               <Footer/>
            </div>
         </React.Fragment>
      );
   }
}
