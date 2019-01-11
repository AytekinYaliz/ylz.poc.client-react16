import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from 'src/routes';


export default () => (
   <div>
      <ul>
         <li>
            <Link to={routes.LANDING}>Landing</Link>
         </li>
         <li>
            <Link to={routes.HOME}>Home</Link>
         </li>
         <li>
            <Link to={routes.SIGN_IN}>Sign In</Link>
         </li>
         <li>
            <Link to={routes.SIGN_UP}>Sign Up</Link>
         </li>
         <li>
            <Link to={routes.PASSWORD_FORGET}>Password Forget</Link>
         </li>
      </ul>
   </div>
);


// export default function Navigation() {
//    return (
//       <div className="App">
//          <header className="App-header">
//             <p>
//                Edit <code>src/App.js</code> and save to reload.
//             </p>
//             <a
//                className="App-link"
//                href="https://reactjs.org"
//                target="_blank"
//                rel="noopener noreferrer"
//             >
//                Learn React
//             </a>
//          </header>
//       </div>
//    );
// }
