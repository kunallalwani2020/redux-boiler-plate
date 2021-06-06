import firebase from'firebase/app';
import '@firebase/firestore';
import'firebase/auth';
import'firebase/database';
var firebaseConfig = {
    apiKey: "AIzaSyDNufRs2FzXOwDd1m3xd3b9zcNurYvfkiU",
    authDomain: "chatapp-1ea4f.firebaseapp.com",
    projectId: "chatapp-1ea4f",
    storageBucket: "chatapp-1ea4f.appspot.com",
    messagingSenderId: "269931734631",
    appId: "1:269931734631:web:907fd049f62e5c7d7456c2",
    measurementId: "G-DEBEZ0NR9W"
  };
  // Initialize Firebase
 const Firebase =  firebase.initializeApp(firebaseConfig);
 export default Firebase