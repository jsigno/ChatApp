import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import Constants from 'expo-constants';
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCPx--HcKpNMwHwLCqjR8KBw5QG1BEaOFA",
  authDomain: "chat-application-88296.firebaseapp.com",
  projectId: "chat-application-88296",
  storageBucket: "chat-application-88296.appspot.com",
  messagingSenderId: "241626499855",
  appId: "1:241626499855:web:d3b07f212bdc1ddf288c7a"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
