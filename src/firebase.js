import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC0xPSZhMvKyWq1L5Q1WJnCtF9GAa-_BVk",
    authDomain: "instagram-clone-react-92958.firebaseapp.com",
    projectId: "instagram-clone-react-92958",
    storageBucket: "instagram-clone-react-92958.appspot.com",
    messagingSenderId: "155750487580",
    appId: "1:155750487580:web:325b1fa3a6942eac9731d9",
    measurementId: "G-QNLLB7PNR9"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
