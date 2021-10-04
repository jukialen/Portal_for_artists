import React from 'react';

import { AuthorisedUser } from 'views/AuthorisedUser/AuthorisedUser';
import { UnauthorisedUser } from 'views/UnauthorisedUser/UnauthorisedUser';

import './App.scss';
import 'generalSCSS/reset.scss';

import { NavFormProvider } from 'providers/NavFormProvider';
import { ModeProvider } from 'providers/ModeProvider';

export function App() {
  const user = localStorage.getItem('user');

  return (
    <ModeProvider>
      {user ? (
        <AuthorisedUser />
      ) : (
        <NavFormProvider>
          <UnauthorisedUser />
        </NavFormProvider>
      )}
    </ModeProvider>
  );
}
