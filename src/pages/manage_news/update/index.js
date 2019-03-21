import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import './style.css'

import ControlMenu from '../../../components/ControlMenu'
import Footer from '../../../components/Footer'
import Info from '../../../components/Info'

import {
   FaNewspaper, FaMarker, FaThLarge, FaParagraph, FaLocationArrow, FaFolder, FaPaperPlane, FaTimesCircle
} from 'react-icons/fa'

import {
   Form, Button, ButtonGroup
} from 'react-bootstrap'

class NewsUpdate extends Component {
   constructor(props) {
      super(props);
      this.state = { 
         authorized: false,
         infoType: '',
         submitCallback: '',
         inputData: {}
      }

      this.submitUpdate = this.submitUpdate.bind(this)
   }

   async componentWillMount(){
      document.title = "Create news"

      try{
         const response = await axios.get(`http://auth-api-nodejs.herokuapp.com/manage_news/${this.props.match.params.newsId}`, {
         headers:{
            'Authorization': localStorage.getItem('token')
            }
         })

         return this.setState({ authorized: true, inputData: response.data })
      }catch(err){
         return this.props.history.push('/401')
      }
   }
   
   async submitUpdate(e){
      e.preventDefault()

      if(!(window.confirm("Are you sure you want to update?")))
         return

      try{
         const newsData = Array.from(e.target.elements).map((inp) => inp.value)
         let [category, title, lead, body, location] = newsData
         
         title.replace('"', '“')
         lead.replace('"', '“')
         body.replace('"', '“')

         const response = await axios.put(
            `http://auth-api-nodejs.herokuapp.com/manage_news/update/${this.props.match.params.newsId}`,
            { category, title, lead, body, location },
            { headers: { "Authorization": localStorage.getItem('token') } }
         )

         setTimeout(() => {
            return this.props.history.push('/manage_news')
         }, 2000)
         
         return this.setState({ infoType: 'success', submitCallback: response.data.ok })
      }catch(err){
         return this.setState({ infoType: 'error', submitCallback: err.response.data.error })
      }
   }
   
   render() { 
      const data = { ...this.state.inputData }
      return (
         this.state.authorized === true &&
         <React.Fragment>
            <ControlMenu {...this.props}/>
               <div className="content-wrapper">
                  <div className="display">
                     <h2><Link to="/manage_news/"><Button variant="warning" size="sm" className="btn-return">⮜ Return</Button></Link> <FaNewspaper/> Update news</h2>
                        <Form onSubmit={this.submitUpdate}>
                           <div className="form-inputs-wrapper">
                              <Form.Group controlId="category">
                                 <Form.Label><FaFolder/>Category </Form.Label>
                                 <Form.Control type="text" placeholder="news category" name="category" defaultValue={data.category} required/>
                              </Form.Group>
                              <Form.Group controlId="title">
                                 <Form.Label><FaMarker/>Title </Form.Label>
                                 <Form.Control type="text" placeholder="give a title to your news" name="title" defaultValue={data.title} required/>
                              </Form.Group>
                              <Form.Group controlId="lead">
                                 <Form.Label><FaThLarge/>Lead </Form.Label>
                                 <Form.Control as="textarea" rows="4" type="text" placeholder="a short lead" name="lead" defaultValue={data.lead} required/>
                              </Form.Group>
                              <Form.Group controlId="body">
                                 <Form.Label><FaParagraph/>Body </Form.Label>
                                 <Form.Control as="textarea" rows="10" type="text" placeholder="news body" name="body" wrap="hard" defaultValue={data.body}  required/>
                              </Form.Group>
                              <Form.Group controlId="location">
                                 <Form.Label><FaLocationArrow/>Location </Form.Label>
                                 <Form.Control type="text" placeholder="where did it happened?" name="location" defaultValue={data.location} required/>
                              </Form.Group>                             
                           </div>
                           <Info msg={this.state.submitCallback} infoType={this.state.infoType}/>
                           <ButtonGroup>
                              <Button variant="primary" type="submit"> <FaPaperPlane/> Submit update</Button>
                              <Button variant="secondary"> <FaTimesCircle/> Cancel</Button>
                           </ButtonGroup>
                        </Form>
                  </div>
                  <Footer/>
               </div>
         </React.Fragment>
      );
   }
}
 
export default NewsUpdate;
