import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//Fill the below details from your firebase account
const firebaseConfig = {
  apiKey: "AIzaSyCWV9BNFrxYlHnsCCz29IjwInt2BOHYgEs",
  authDomain: "netflix-clone-adi-38814.firebaseapp.com",
  projectId: "netflix-clone-adi-38814",
  storageBucket: "netflix-clone-adi-38814.appspot.com",
  messagingSenderId: "873393925918",
  appId: "1:873393925918:web:3b00e44e765499d2b1630f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
