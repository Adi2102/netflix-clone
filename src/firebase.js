import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnf2-KvVFI90cuKPkA6_-oVbrU0gfjEdY",
  authDomain: "new-netflix-clone-80465.firebaseapp.com",
  projectId: "new-netflix-clone-80465",
  storageBucket: "new-netflix-clone-80465.appspot.com",
  messagingSenderId: "1055905574064",
  appId: "1:1055905574064:web:d362e4a766483444f59f75",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
