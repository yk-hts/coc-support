import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQqAbn6dcqcj5_cFbexJvwHKvH8I7Fhac",
  authDomain: "coc-support.firebaseapp.com",
  databaseURL: "https://coc-support.firebaseio.com",
  projectId: "coc-support",
  storageBucket: "coc-support.appspot.com",
  messagingSenderId: "830752238997",
  appId: "1:830752238997:web:0a1331f79f0ce5911b5a9c",
  measurementId: "G-J4WK3K20J9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
