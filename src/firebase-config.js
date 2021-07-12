import { initializeApp } from 'firebase/app';
// import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import 'firebase/app-check';
// import firebase from 'firebase/compat';

const firebaseApp = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const db = getFirestore();

// const appCheck = firebase.appCheck();
//
// appCheck.activate(process.env.REACT_APP_FIREBASE_APP_CHECK);
