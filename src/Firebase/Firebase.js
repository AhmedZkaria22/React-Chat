import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

firebase.initializeApp({
  apiKey: "AIzaSyCgtoweQnHcYa0a0B9dLwFbE9KTGVCg6_g",
  authDomain: "chatbot-896c0.firebaseapp.com",
  projectId: "chatbot-896c0",
  storageBucket: "chatbot-896c0.appspot.com",
  messagingSenderId: "368946359439",
  appId: "1:368946359439:web:0aec4eed96e92447d8d4fa",
  measurementId: "G-NYYF52TG6M"
});

export default firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();
