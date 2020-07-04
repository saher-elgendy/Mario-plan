
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCpBPh37XFEVXr14djprPTFkP5WyFqRLXY",
    authDomain: "react-redux-firebase-b4759.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-b4759.firebaseio.com",
    projectId: "react-redux-firebase-b4759",
    storageBucket: "react-redux-firebase-b4759.appspot.com",
    messagingSenderId: "650703042449",
    appId: "1:650703042449:web:ad3cbf40432616f32f8c30",
    measurementId: "G-Y3VR3PV73K"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;