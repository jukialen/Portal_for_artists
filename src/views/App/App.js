import React from 'react';

import { AuthorisedUser } from 'views/AuthorisedUser/AuthorisedUser';
import { UnauthorisedUser } from 'views/UnauthorisedUser/UnauthorisedUser';

import './App.scss';

import { NavFormProvider } from 'providers/NavFormProvider';
import { ModeProvider } from 'providers/ModeProvider';

import 'generalSCSS/reset.scss';

import { currentUser } from 'firebaseConfig';

export function App() {

  return (
    <ModeProvider>
      {currentUser ? (
        <AuthorisedUser />
      ) : (
        <NavFormProvider>
          <UnauthorisedUser />
        </NavFormProvider>
      )}
    </ModeProvider>
  );
}
