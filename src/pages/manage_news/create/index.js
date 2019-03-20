import React, { Component } from 'react';
import axios from 'axios';

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

class NewsCreate extends Component {
   constructor(props) {
      super(props);
      this.state = { 
         authorized: false,
         infoType: '',
         submitCallback: ''
      }

      this.submitNews = this.submitNews.bind(this)
   }

   async componentWillMount(){
      document.title = "Create news"

      try{
         await axios.get("http://auth-api-nodejs.herokuapp.com/manage_news", {
         headers:{
            'Authorization': localStorage.getItem('token')
            }
         })

         return this.setState({ authorized: true })
      }catch(err){
         return this.props.history.push('/401')
      }
   }
   
   async submitNews(e){
      e.preventDefault()
      try{
         const newsData = Array.from(e.target.elements).map((inp) => inp.value)
         let [category, title, lead, body, location] = newsData
         
         await axios.post(
            "http://auth-api-nodejs.herokuapp.com/manage_news/create",
            { category, title, lead, body, location },
            { headers: { "Authorization": localStorage.getItem('token') } }
         )

         setTimeout(() => {
            return this.props.history.push('/manage_news')
         }, 1800)

         return this.setState({ infoType: 'success', submitCallback: 'Your news has been posted!' })
      }catch(err){
         return this.setState({ infoType: 'error', submitCallback: err.response.data.error })
      }
   }
   
   render() { 
      return (
         this.state.authorized === true &&
         <React.Fragment>
            <ControlMenu/>
               <div className="content-wrapper">
                  <div className="display">
                     <h2> <FaNewspaper/> Create news</h2>
                        <Form onSubmit={this.submitNews}>
                           <div className="form-inputs-wrapper">
                              <Form.Group controlId="category">
                                 <Form.Label><FaFolder/>Category </Form.Label>
                                 <Form.Control type="text" placeholder="news category" name="category" required></Form.Control>
                              </Form.Group>
                              <Form.Group controlId="title">
                                 <Form.Label><FaMarker/>Title </Form.Label>
                                 <Form.Control type="text" placeholder="give a title to your news" name="title" required></Form.Control>
                              </Form.Group>
                              <Form.Group controlId="lead">
                                 <Form.Label><FaThLarge/>Lead </Form.Label>
                                 <Form.Control as="textarea" rows="4" type="text" placeholder="a short lead" name="lead" required></Form.Control>
                              </Form.Group>
                              <Form.Group controlId="body">
                                 <Form.Label><FaParagraph/>Body </Form.Label>
                                 <Form.Control as="textarea" rows="10" type="text" placeholder="news body" name="body" wrap="hard" required></Form.Control>
                              </Form.Group>
                              <Form.Group controlId="location">
                                 <Form.Label><FaLocationArrow/>Location </Form.Label>
                                 <Form.Control type="text" placeholder="where did it happened?" name="location" required></Form.Control>
                              </Form.Group>                             
                           </div>
                           <Info msg={this.state.submitCallback} infoType={this.state.infoType}/>
                           <ButtonGroup>
                              <Button variant="primary" type="submit"> <FaPaperPlane/> Submit</Button>
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
 
export default NewsCreate;
