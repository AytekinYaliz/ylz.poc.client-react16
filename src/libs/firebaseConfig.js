import firebase from 'firebase/app';
import 'firebase/auth';

import { NodeEnv } from 'libs/constants';


const prodConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  databaseURL: 'YOUR_DATABASE_URL',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: '',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
};

const devConfig = {
   apiKey: 'YOUR_API_KEY',
   authDomain: 'YOUR_AUTH_DOMAIN',
   databaseURL: 'YOUR_DATABASE_URL',
   projectId: 'YOUR_PROJECT_ID',
   storageBucket: '',
   messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
 };

 const config = process.env.NODE_ENV === NodeEnv.prod
   ? prodConfig
   : devConfig;

 if (!firebase.apps.length) {
   firebase.initializeApp(config);
 }

 export {
   auth: firebase.auth(),
 };
