import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDqukLLJDozSaEkOLOjB8B-J8QcAygDZ-k",
  authDomain: "slack-clone-11602.firebaseapp.com",
  projectId: "slack-clone-11602",
  storageBucket: "slack-clone-11602.appspot.com",
  messagingSenderId: "38613970658",
  appId: "1:38613970658:web:34342ae2192b3a292278bb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;


