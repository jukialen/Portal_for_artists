import React, { useContext } from 'react';

import './Nav.scss';

import { NavFormProvider } from 'providers/NavFormProvider';

import { NavFormContext } from 'providers/NavFormProvider';
import { ShowMenuContext } from 'providers/ShowMenuProvider';

export function Nav() {
  const { isMenu } = useContext(ShowMenuContext);
  const { showLoginForm } = useContext(NavFormContext);
  const { showCreateAccountForm } = useContext(NavFormContext);

  return (
    <NavFormProvider>
      <nav className={isMenu ? 'menu--active' : null}>
        <ul>
          <li className="menu">
            <a href="#" className="sign__in" onClick={showLoginForm}>
              Zaloguj się
            </a>
          </li>
          <li className="menu" onClick={showCreateAccountForm}>
            <a href="#" className="sign__out">
              Zarejestruj się
            </a>
          </li>
        </ul>
      </nav>
    </NavFormProvider>
  );
}
