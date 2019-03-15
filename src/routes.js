import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Misc
import NotFound from './components/NotFound'

// Auth
import Auth from './pages/auth'
import ResetPassword from './pages/auth/reset_password'
import ForgotPassword from './pages/auth/forgot_password'

// Panel
import NewsPanel from './pages/manage_news'

const Routes = () => (
   <BrowserRouter>
      <Switch>
         <Route exact path="/" component={Auth} />
         <Route exact path="/forgot_password" component={ForgotPassword} />
         <Route path="/reset_password/:token/" component={ResetPassword} />
         <Route exact path="/manage_news" component={NewsPanel}>
         </Route>

         <Route component={NotFound}/>
      </Switch>
   </BrowserRouter>
)

export default Routes

