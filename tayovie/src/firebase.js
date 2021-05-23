import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC15E85-sHKdeajqJdabbVmHrYjGsN-KAE",
  authDomain: "tayovie-3c201.firebaseapp.com",
  projectId: "tayovie-3c201",
  storageBucket: "tayovie-3c201.appspot.com",
  messagingSenderId: "978906796803",
  appId: "1:978906796803:web:0e3c2584a1196f52730f36",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
