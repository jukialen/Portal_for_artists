import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.scss';

import { NavFormContext, NavFormProvider } from 'providers/NavFormProvider';

export function Nav({ isMenu }) {
  const { showLoginForm, showCreateForm } = useContext(NavFormContext);

  return (
    <NavFormProvider>
      <nav className={isMenu ? 'menu--active' : null}>
        <ul>
          <li className="menu">
            <NavLink
              to="/user_in"
              href="#"
              className="sign__in"
              onClick={showLoginForm}
            >
              Zaloguj się
            </NavLink>
          </li>
          <li className="menu">
            <NavLink
              to="sign_out"
              href="#"
              className="sign__out"
              onClick={showCreateForm}
            >
              Zarejestruj się
            </NavLink>
          </li>
        </ul>
      </nav>
    </NavFormProvider>
  );
}
