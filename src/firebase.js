import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA18o1hyfDUAWRbh8THViBDWSbNP0nYhfI",
  authDomain: "slack-clone-4e29d.firebaseapp.com",
  databaseURL: "https://slack-clone-4e29d-default-rtdb.firebaseio.com",
  projectId: "slack-clone-4e29d",
  storageBucket: "slack-clone-4e29d.appspot.com",
  messagingSenderId: "190886264026",
  appId: "1:190886264026:web:c9bed2edb45aa5b94af9e3",
  measurementId: "G-565BKK41PS"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
