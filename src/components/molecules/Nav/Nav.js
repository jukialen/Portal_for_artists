import React, { useContext } from 'react';

import './Nav.scss';
import { NavFormContext } from '../../../providers/NavFormProvider';
import { ShowMenuContext } from '../../../providers/ShowMenuProvider';
import { Link } from 'react-router-dom';

export const Nav = ({ titleFirstNav, titleSecondNav }) => {
  const { showLoginForm, showCreateForm } = useContext(NavFormContext);

  const { isMenu } = useContext(ShowMenuContext);

  return (
    <nav className={isMenu ? 'menu--active' : ''}>
      <ul>
        <li className="menu">
          <a
            href="#"
            className="sign__in"
            onClick={
              titleFirstNav === 'Wyloguj'
                ? localStorage.removeItem('user')
                : showLoginForm
            }
          >
            {titleFirstNav}
          </a>
        </li>
        <li className="menu">
          <Link
            as="a"
            to={titleSecondNav === 'Konto' ? '/account' : '#'}
            href="#"
            className="sign__out"
            onClick={showCreateForm}
          >
            {titleSecondNav}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
