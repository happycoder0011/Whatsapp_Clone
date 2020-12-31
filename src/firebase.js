import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCwjC37eM_Zmln7X3gWB8JzoVyNJR7RXg8",
    authDomain: "whatsappmern-13503.firebaseapp.com",
    databaseURL: "https://whatsappmern-13503.firebaseio.com",
    projectId: "whatsappmern-13503",
    storageBucket: "whatsappmern-13503.appspot.com",
    messagingSenderId: "684178587251",
    appId: "1:684178587251:web:1001aa557ea419dd307406"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider} ;
  export default db;