import React, { Component, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import * as routes from 'src/routes';


const SignUpPage = ({ history }) => (
   <div>
      <h1>Sign Up</h1>
      <SignUpForm history={history} />
   </div>
);

const SignUpLink = () => (
   <p>
      Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
   </p>
);

const SignUpForm = (props) => {
   const [state, setState] = useState({
      username: '',
      email: '',
      password: '',
      password2: '',
      error: null
   });

   const onSubmit = event => {
      const { username, email, password } = state;
      const { history } = props;

      new Promise((res, rej) => res(123))
         .then(data => {
            console.log( data );
            history.push(routes.HOME);
         })
         .catch(err => {
            console.log( 'ERR', err );
         });

      event.preventDefault();
   };
   const onChange = propertyName => event => {
      let value = event.target.value;
      setState(prevState => ({ ...prevState, [propertyName]: value }));
   };

   const { username, email, password, password2, error } = state;
   const isInvalid =
      email === '' ||
      username === '' ||
      password !== password2 ||
      password === '';

   return (
      <form onSubmit={onSubmit}>
         <input
            value={username}
            onChange={onChange('username')}
            type="text"
            placeholder="Full Name"
         />
         <input
            value={email}
            onChange={onChange('email')}
            type="text"
            placeholder="Email Address"
         />
         <input
            value={password}
            onChange={onChange('password')}
            type="password"
            placeholder="Password"
         />
         <input
            value={password2}
            onChange={onChange('password2')}
            type="password"
            placeholder="Confirm Password"
         />
         <button type="submit" disabled={isInvalid}>Sign Up</button>
         {error && <p>{error.message}</p>}
      </form>
   );
};

export default withRouter(SignUpPage);
export {
   SignUpLink
};


/**
 * Class version
 */
class SignUpFormClass extends Component {
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
      const { username, email, password } = this.state;
      const { history } = this.props;

      new Promise((res, rej) => res(111))
         .then(data => {
            console.log( data );
            history.push(routes.HOME);
         })
         .catch(err => {
            console.log( 'ERR', err );
         });

      event.preventDefault();
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
