import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as routes from 'src/routes';

const SignUpPage = () => (
   <div>
      <h1>Sign Up</h1>
      <SignUpForm />
   </div>
);

class SignUpForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         username: '',
         email: '',
         passwordOne: '',
         passwordTwo: '',
         error: null
      };
   }
   onSubmit = event => {};
   byPropKey = (propertyName, value) => () => ({
      [propertyName]: value
   });

   render() {
      const { username, email, passwordOne, passwordTwo, error } = this.state;
      const isInvalid =
         email === '' ||
         username === '' ||
         passwordOne !== passwordTwo ||
         passwordOne === '';

      return (
         <form onSubmit={this.onSubmit}>
            <input
               value={username}
               onChange={event =>
                  this.setState(this.byPropKey('username', event.target.value))
               }
               type="text"
               placeholder="Full Name"
            />
            <input
               value={email}
               onChange={event =>
                  this.setState(this.byPropKey('email', event.target.value))
               }
               type="text"
               placeholder="Email Address"
            />
            <input
               value={passwordOne}
               onChange={event =>
                  this.setState(this.byPropKey('passwordOne', event.target.value))
               }
               type="password"
               placeholder="Password"
            />
            <input
               value={passwordTwo}
               onChange={event =>
                  this.setState(this.byPropKey('passwordTwo', event.target.value))
               }
               type="password"
               placeholder="Confirm Password"
            />
            <button type="submit" disabled={isInvalid}>Sign Up</button>
            {error && <p>{error.message}</p>}
         </form>
      );
   }
}

const SignUpLink = () => (
   <p>
      Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
   </p>
);

export default SignUpPage;

export { SignUpForm, SignUpLink };
