import React from 'react';
import { useHistory } from 'react-router-dom';

import { AuthorisedUser } from 'views/AuthorisedUser/AuthorisedUser';
import { UnauthorisedUser } from 'views/UnauthorisedUser/UnauthorisedUser';

import './App.scss';

import { NavFormProvider } from 'providers/NavFormProvider';
import { ModeProvider } from 'providers/ModeProvider';

import 'generalSCSS/reset.scss';

import { currentUser } from 'firebaseConfig';

export function App() {
  const user = localStorage.getItem('user');

  const history = useHistory();
  // user ? history.push('/') : history.push('/app');
  return (
    <ModeProvider>
      {currentUser || user ? (
        <AuthorisedUser />
      ) : (
        <NavFormProvider>
          <UnauthorisedUser />
        </NavFormProvider>
      )}
    </ModeProvider>
  );
}
