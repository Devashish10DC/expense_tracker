import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore";
import "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyC9gWiVZq2dnokluxs8bZyDvsa7n24p3EM",
  authDomain: "react-162ba.firebaseapp.com",
  projectId: "react-162ba",
  storageBucket: "react-162ba.appspot.com",
  messagingSenderId: "771855008337",
  appId: "1:771 855008337:web:6ec90432fc79d63862ae70",
  measurementId: "G-MYEKG800R0"
});

  const firestore = app.firestore();
  export const database = {

    users: firestore.collection('users')

  }
  export const storage = firebase.storage()
  export const auth = app.auth();
  export default app;