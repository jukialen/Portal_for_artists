import React, { useContext } from 'react';
import { Button } from '../../atoms/Button/Button';

import './Providers.scss';

import { AppleFilled, GoogleOutlined, YahooFilled } from '@ant-design/icons';

import { auth, db } from 'firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { NavFormContext } from '../../../providers/NavFormProvider';

import { useHistory } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';

//GOOGLE PROVIDER
const googleProvider = new GoogleAuthProvider();

googleProvider.addScope('profile');
googleProvider.addScope('email');

export const Providers = () => {

  const { isLogin } = useContext(NavFormContext);

  let history = useHistory();

  // auth.useEmulator('http://localhost:5000');

  const signInWithGoogle = signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
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
      {
        isLogin ? history.push('/app') : history.push('/');
      }
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
        alert(
          'You have already signed up with a different auth provider for that email.'
        );
        // If you are using multiple auth providers on your app you should handle linking
        // the user's accounts here.
      } else {
        console.error('Error:', error);
      }
    });
  return (
    <div className="providers">
      <Button
        classButton="google"
        typeButton="submit"
        ariaLabel="google provider"
        elementButton={<GoogleOutlined />}
        onClick={() => signInWithGoogle()}
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
        // onClick={() => signInWithYahoo()}
      />
    </div>
  );
};
