import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCZjuhyOVboS6YEZN6S7Gl6xzcEn2b1-M",
  authDomain: "react-slack-7dc96.firebaseapp.com",
  projectId: "react-slack-7dc96",
  storageBucket: "react-slack-7dc96.appspot.com",
  messagingSenderId: "706084637547",
  appId: "1:706084637547:web:5fb8bdbf03029d6d7cda2e",
};

// Use this to initialize the firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig);

// Use these for db, auth & provider
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
