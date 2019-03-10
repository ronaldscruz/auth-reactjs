import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Auth
import Auth from './pages/auth'
import ResetPassword from './pages/auth/reset_password'
import ForgotPassword from './pages/auth/forgot_password'

// Panel
import NewsPanel from './pages/manage_news'

const Routes = () => (
   <BrowserRouter>
      <Switch>
         {/* <Route exact path="/404" component={NotFound}/>
         <Redirect from="*" to="/404"/> */}
         <Route exact path="/" component={Auth} />
         <Route exact path="/forgot_password" component={ForgotPassword} />
         <Route exact path="/reset_password" component={ResetPassword} />
         <Route exact path="/manage_news" component={NewsPanel}>
            {/*  */}
         </Route>
      </Switch>
   </BrowserRouter>
)

export default Routes

