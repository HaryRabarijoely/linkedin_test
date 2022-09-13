import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBXKQgGIV_6hWH7DeauuxuC2gzQxRq4zHI",
    authDomain: "linkedin-test-7c95b.firebaseapp.com",
    projectId: "linkedin-test-7c95b",
    storageBucket: "linkedin-test-7c95b.appspot.com",
    messagingSenderId: "625194998685",
    appId: "1:625194998685:web:35cb8312e4c685e8452d74"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;