import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Misc
import NotFound from './components/NotFound'
import Unauthorized from './components/Unauthorized'

// Auth
import Auth from './pages/auth'
import ResetPassword from './pages/auth/reset_password'
import ForgotPassword from './pages/auth/forgot_password'

// Panel
import NewsPanel from './pages/manage_news'
import NewsView from './pages/manage_news/read'
import NewsCreate from './pages/manage_news/create'
import NewsUpdate from './pages/manage_news/update'

const Routes = () => (
   <BrowserRouter>
      <Switch>
         <Route exact path="/401" component={Unauthorized}/>

         <Route exact path="/" component={Auth} />
         <Route exact path="/forgot_password" component={ForgotPassword} />
         <Route exact path="/reset_password/:token/:userId" component={ResetPassword} />
         
         <Route exact path="/manage_news" component={NewsPanel}/>
         <Route exact path="/manage_news/view/:newsId" component={NewsView}/>
         {/* <Route exact path="/manage_news/update/:newsId" component={NewsUpdate}/> */}
         <Route exact path="/manage_news/create" component={NewsCreate}/>

         <Route component={NotFound}/>        
      </Switch>
   </BrowserRouter>
)

export default Routes

