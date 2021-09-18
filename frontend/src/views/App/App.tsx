import React from 'react';
import { useHistory } from 'react-router-dom';

import { AuthorisedUser } from 'frontend/src/views/AuthorisedUser/AuthorisedUser';
import { UnauthorisedUser } from 'frontend/src/views/UnauthorisedUser/UnauthorisedUser';

import './App.scss';

import { NavFormProvider } from 'frontend/src/providers/NavFormProvider';
import { ModeProvider } from 'frontend/src/providers/ModeProvider';

import 'frontend/src/generalSCSS/reset.scss';

export function App() {
  const user = localStorage.getItem('user');

  const history = useHistory();
  // user ? history.push('/') : history.push('/app');
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
