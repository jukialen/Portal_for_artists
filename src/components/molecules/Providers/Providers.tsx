import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'components/atoms/Button/Button';

import './Providers.scss';
import { AppleFilled, GoogleOutlined, YahooFilled } from '@ant-design/icons';

import { auth, db } from 'firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { GoogleAuthProvider, OAuthProvider, signInWithPopup } from 'firebase/auth';

import { NavFormContext } from 'providers/NavFormProvider';

// GOOGLE PROVIDER
const googleProvider = new GoogleAuthProvider();

googleProvider.addScope('profile');
googleProvider.addScope('email');

// YAHOO PROVIDER
const yahooProvider = new OAuthProvider('yahoo.com');

export const Providers = () => {
  const { isLogin } = useContext(NavFormContext);

  const history = useHistory();

  // auth.useEmulator('http://localhost:5000');

  const signInWithGoogle = signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // @ts-ignore
      const credential = googleProvider.credentialFromResult(result);

      const token = credential.accessToken;
      localStorage.setItem('googleToken', token);
      // The signed-in user info.
      const user = result.user;
      // ...

      addDoc(collection(db, 'users'), {
        username: user,
        pseudonym: 'default',
        email: result.user,
        token,
      });

      console.log('Credential:', credential);
      console.log('Token:', token);
      console.log('User:', user);

      isLogin && history.push('/app');
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      // The email of the user's account used.
      console.log(errorMessage);
      const email = error.email;

      console.log(email);
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log('Credential:', credential);
      console.log('Code:', error.code);
      console.log('Message:', error.message);

      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('You have already signed up with this email.');
        // If you are using multiple auth providers on your app you should handle linking
        // the user's accounts here.
      } else {
        console.error('Error:', error);
      }
    });

  const signInWithYahoo = signInWithPopup(auth, yahooProvider)
    .then((result) => {
      // IdP data available in result.additionalUserInfo.profile
      // ...
      console.log(yahooProvider);
      // Yahoo OAuth access token and ID token can be retrieved by calling:
      const credential = OAuthProvider.credentialFromResult(result);
      // @ts-ignore
      const accessToken = credential.accessToken;
      // @ts-ignore
      const idToken = credential.idToken;

      // @ts-ignore
      localStorage.setItem('yahooToken', idToken);

      console.log('Credential', credential);
      console.log('Access token:', accessToken);
      console.log('ID token:', idToken);
    })
    .catch((error) => {
      // Handle error.
      console.log('Error:', error);
    });

  return (
    <div className="providers">
      <Button
        classButton="google"
        typeButton="submit"
        ariaLabel="google provider"
        elementButton={<GoogleOutlined />}
        // @ts-ignore
        onClick={signInWithGoogle}
      />
      <Button
        classButton="apple"
        typeButton="submit"
        ariaLabel="apple provider"
        elementButton={<AppleFilled />}
      />
      <Button
        classButton="yahoo"
        typeButton="submit"
        ariaLabel="yahoo provider"
        elementButton={<YahooFilled />}
        // @ts-ignore
        onClick={signInWithYahoo}
      />
    </div>
  );
};
