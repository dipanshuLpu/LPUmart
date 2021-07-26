import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDgqa6jiJedSurrLEl7-_4MbFQoiAJF7DE",
  authDomain: "lpu-mart.firebaseapp.com",
  projectId: "lpu-mart",
  storageBucket: "lpu-mart.appspot.com",
  messagingSenderId: "533755251006",
  appId: "1:533755251006:web:232dc5d65f13994816046f"
};

const app = !firebase.apps.length
  ?  firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore();

  export default  db;