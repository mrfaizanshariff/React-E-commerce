import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnnBP_MjKYrW9r0WG4hebcHo2_C2HMe8s",
  authDomain: "react-e-commerce-eaa3c.firebaseapp.com",
  projectId: "react-e-commerce-eaa3c",
  storageBucket: "react-e-commerce-eaa3c.appspot.com",
  messagingSenderId: "1012575043818",
  appId: "1:1012575043818:web:bfb6df22f488c0e9131793",
  measurementId: "G-PSH6KTF2LC",
};

firebase.initializeApp(firebaseConfig);

//exporting the firebase auth and firestore from the firebase dependency

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setting up the provider from google auth used for signin with google
const provider = new firebase.auth.GoogleAuthProvider();
// giving provider custom parameter of prompt
provider.setCustomParameters({ prompt: `select_account` });
// passing the provider to the signin pop up
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
