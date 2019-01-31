import React, { Component, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import * as routes from 'src/routes';
import { SignUpLink } from './SignUp';
// import { auth } from '../firebase';


const SignInPage = ({ history }) => (
   <div>
      <h1>SignIn</h1>
      <SignInForm history={history} />
      <SignUpLink />
   </div>
);

class SignInForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         email: '',
         password: '',
         error: null,
      };
   }
   onSubmit = event => {
      const { email, password } = this.state;
      const { history } = this.props;

      new  Promise((res, rej) => res(222))
         .then(data => {
            console.log( data );
            history.push(routes.HOME);
         })
         .catch(err => {
            console.log( 'ERR', err );
         });

      // auth.doSignInWithEmailAndPassword(email, password)
      //    .then(() => {
      //       this.setState({ ...INITIAL_STATE });
      //       history.push(routes.HOME);
      //    })
      //    .catch(error => { this.setState(byPropKey('error', error));
      //    });
      event.preventDefault();
   };
   onChange = propertyName => event => {
      let value = event.target.value;
      this.setState(() => ({ [propertyName]: value }));
   };

   render() {
      const {
         email,
         password,
         error,
     } = this.state;
     const isInvalid = password === '' || email === '';

      return (
         <form onSubmit={this.onSubmit}>
            <input
               value={email}
               onChange={this.onChange('email')}
               type="text"
               placeholder="Email Address"
            />
            <input
               value={password}
               onChange={this.onChange('password')}
               type="password"
               placeholder="Password"
            />
            <button disabled={isInvalid} type="submit">Sign In</button>
            { error && <p>{error.message}</p> }
         </form>
      );
   }
}

export default withRouter(SignInPage);
