import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyA2JBuCOVs8ezuhBA1zK9g_cN_Ep8U8uSU",
  authDomain: "clone-2a901.firebaseapp.com",
  databaseURL: "https://clone-2a901.firebaseio.com",
  projectId: "clone-2a901",
  storageBucket: "clone-2a901.appspot.com",
  messagingSenderId: "286192932384",
  appId: "1:286192932384:web:fb6e708b3d501922a10e45",
  measurementId: "G-DSBD0GR3XZ"
};
//authentaction
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const provide = new firebase.auth.FacebookAuthProvider();

export{db,auth};