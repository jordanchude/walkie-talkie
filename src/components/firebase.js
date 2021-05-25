import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// FIREBASE CONFIG
const firebaseConfig = {
    apiKey: "AIzaSyDKwSx9LlzGVoIHLjLulq8McxwTwuTZCsg",
    authDomain: "walkie-talkie-625dd.firebaseapp.com",
    projectId: "walkie-talkie-625dd",
    storageBucket: "walkie-talkie-625dd.appspot.com",
    messagingSenderId: "924847156209",
    appId: "1:924847156209:web:8ba90a959b0230f970b250",
    measurementId: "G-BT7KSVY82M"
  };

// INITIALIZE FIREBASE
firebase.initializeApp(firebaseConfig);

// EXPORT USED VARIABLES
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();