import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBh-XnTaP3y75ufJETKZ7ABA4SHVWH9aDs",
  authDomain: "react-portfolio-contact-e63ac.firebaseapp.com",
  projectId: "react-portfolio-contact-e63ac",
  storageBucket: "react-portfolio-contact-e63ac.appspot.com",
  messagingSenderId: "488127716812",
  appId: "1:488127716812:web:fbf2153aae8e218479d169",
});

var db = firebaseApp.firestore();

export { db };
