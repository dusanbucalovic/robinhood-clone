import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAj9jqYcqF2RozBpfAnXXN6jbDAaR0oVA4",
  authDomain: "robinhood-6384e.firebaseapp.com",
  projectId: "robinhood-6384e",
  storageBucket: "robinhood-6384e.appspot.com",
  messagingSenderId: "38447219765",
  appId: "1:38447219765:web:891887e9bf39a619045d7c"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
