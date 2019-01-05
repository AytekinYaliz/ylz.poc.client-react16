import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';
import * as routes from 'routes';
import Navigation from 'components/navigation/Navigation';
import Home from 'components/Home';
import Landing from 'components/Landing';
import SignIn from 'components/account/SignIn';
import SignUp from 'components/account/SignUp';
import PassportForget from 'components/account/PassportForget';


export default function App() {
   return (
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
   );
}
