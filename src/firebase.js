// import firebase from "firebase/compat";
import firebase from "firebase";
// import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCoEb5iqb-g-OJ-14ZXeCNUJYE2C1N-_po",
  authDomain: "user-form-test-c3cf2.firebaseapp.com",
  projectId: "user-form-test-c3cf2",
  storageBucket: "user-form-test-c3cf2.appspot.com",
  messagingSenderId: "1009135905032",
  appId: "1:1009135905032:web:dff33b4abdb7fa5e9524bd",
});

const db = firebaseApp.firestore();

export { db };
