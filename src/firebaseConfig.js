import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  // OAuthProvider,
  // signOut,
} from 'firebase/auth';

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

// export const providersSignOut = () => {
//   signOut(auth)
//     .then(() => {
//       console.log('SignOut Successful');
//     })
//     .catch((error) => {
//       console.log('SignOut Failed');
//     });
// };

//YAHOO PROVIDER

// const yahooProvider = new OAuthProvider('yahoo.com');
//
// export const signInWithYahoo = signInWithPopup(auth, yahooProvider)
//   .then((result) => {
//     // IdP data available in result.additionalUserInfo.profile
//     // ...
//
//       console.log(yahooProvider);
//     // Yahoo OAuth access token and ID token can be retrieved by calling:
//     const credential = OAuthProvider.credentialFromResult(result);
//     const accessToken = credential.accessToken;
//     const idToken = credential.idToken;
//
//     localStorage.setItem('yahooToken', idToken);
//
//     console.log(credential)
//       console.log(accessToken)
//       console.log(idToken)
//
//   })
//   .catch((error) => {
//     // Handle error.
//   });
//
