import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// eslint-disable-next-line no-unused-vars
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
