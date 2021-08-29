import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { getAuth, signOut } from 'firebase/auth';

import { getStorage, ref } from "firebase/storage";

const firebaseApp = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const db = getFirestore(firebaseApp);

export const auth = getAuth(firebaseApp);

export const currentUser = auth.currentUser;

auth.useDeviceLanguage();

export const providersSignOut = () => {
  signOut(auth)
    .then(() => {
      alert('SignOut Successful');
    })
    .catch((error) => {
      console.log('Error sign out:', error);
      alert('SignOut Failed');
    });
};

// CLOUD STORAGE
export const storage = getStorage(firebaseApp);

