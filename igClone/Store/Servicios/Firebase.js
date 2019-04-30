import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDmLhPa8FZgjfFloG85AwVoDl3DVyATbnM',
  authDomain: 'ig-clone-posta.firebaseapp.com',
  databaseURL: 'https://ig-clone-posta.firebaseio.com',
  projectId: 'ig-clone-posta',
  storageBucket: 'ig-clone-posta.appspot.com',
  messagingSenderId: '512442307472',
};
firebase.initializeApp(config);

export const autenticacion = firebase.auth();

export const database = firebase.database();
