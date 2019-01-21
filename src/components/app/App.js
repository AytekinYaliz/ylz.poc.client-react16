import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';
import * as routes from 'src/routes';
import Navigation from 'src/components/navigation/Navigation';
import Home from 'src/components/Home';
import Landing from 'src/components/Landing';
import SignIn from 'src/components/account/SignIn';
import SignUp from 'src/components/account/SignUp';
import PassportForget from 'src/components/account/PassportForget';


export default () =>
   <Router>
      <>
         <Navigation />
         <hr />
         <Route exact path={routes.LANDING} component={() => <Landing />} />
         <Route exact path={routes.HOME} component={() => <Home />} />
         <Route exact path={routes.SIGN_IN} component={() => <SignIn />} />
         <Route exact path={routes.SIGN_UP} component={() => <SignUp />} />
         <Route exact path={routes.PASSWORD_FORGET} component={() => <PassportForget />} />
      </>
   </Router>
