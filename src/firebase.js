import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuiKNCG5pzmDbbiTOxAH88rWNhFzSkT9k",
  authDomain: "achievers-c287a.firebaseapp.com",
  projectId: "achievers-c287a",
  storageBucket: "achievers-c287a.appspot.com",
  messagingSenderId: "1030757631573",
  appId: "1:1030757631573:web:2e6f2e43899dd4130336dc",
  measurementId: "G-T4LT6SXXHK",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
