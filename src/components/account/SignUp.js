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
         password: '',
         password2: '',
         error: null
      };
   }

   onSubmit = event => {
      event.preventDefault();

      const { username, email, password } = this.state;

      new Promise((res, rej) => rej(123))
         .then(data => {
            console.log( data );
         })
         .catch(err => {
            console.log( 'ERR', err );
         });
   };
   onChange = propertyName => event => {
      let value = event.target.value;
      this.setState(() => ({ [propertyName]: value }));
   };

   render() {
      const { username, email, password, password2, error } = this.state;
      const isInvalid =
         email === '' ||
         username === '' ||
         password !== password2 ||
         password === '';

      return (
         <form onSubmit={this.onSubmit}>
            <input
               value={username}
               onChange={this.onChange('username')}
               type="text"
               placeholder="Full Name"
            />
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
            <input
               value={password2}
               onChange={this.onChange('password2')}
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
