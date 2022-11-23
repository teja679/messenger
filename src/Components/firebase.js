import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAkuZU5czwAKSxAIPbNBNA9ZQueJmJJTYs",
    authDomain: "unichat-208ac.firebaseapp.com",
    projectId: "unichat-208ac",
    storageBucket: "unichat-208ac.appspot.com",
    messagingSenderId: "186274392576",
    appId: "1:186274392576:web:0e5f4de395e4cd832646e5"
  }).auth()