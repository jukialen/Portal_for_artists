import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

import { providersSignOut } from 'firebaseConfig';

import { NavFormContext } from 'providers/NavFormProvider';
import { ShowMenuContext } from 'providers/ShowMenuProvider';

type titleNavType = {
  titleFirstNav: string;
  titleSecondNav: string;
}
export const Nav = ({ titleFirstNav, titleSecondNav }: titleNavType) => {
  const { showLoginForm, showCreateForm } = useContext(NavFormContext);

  const { isMenu, showMenu } = useContext(ShowMenuContext);

  const hideMenuLogin = () => {
    showLoginForm();
    showMenu();
  };

  const hideMenuCreate = () => {
    showCreateForm();
    showMenu();
  };

  return (
    <nav className={isMenu ? 'menu--active' : ''}>
      <ul>
        <li className="menu">
          <a
            href="#"
            className="sign__in"
            onClick={
              titleFirstNav === 'Wyloguj'
                ? providersSignOut
                : hideMenuLogin
            }
          >
            {titleFirstNav}
          </a>
        </li>
        <li className="menu">
          <Link
            to={titleSecondNav === 'Konto' ? '/account' : '#'}
            className="sign__out"
            onClick={hideMenuCreate}
          >
            {titleSecondNav}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
