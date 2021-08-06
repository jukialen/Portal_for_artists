import React from 'react';

import { AuthorisedUser } from '../AuthorisedUser/AuthorisedUser';
import { UnauthorisedUser } from '../UnauthorisedUser/UnauthorisedUser';

import { NavFormProvider } from '../../providers/NavFormProvider';
import { ModeProvider } from '../../providers/ModeProvider';
import './App.scss';

import 'generalSCSS/reset.scss';

import { currentUser } from "firebaseConfig";

export function App() {
  // const user = localStorage.getItem('user');

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
