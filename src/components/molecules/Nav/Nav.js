import React from 'react';

import './Nav.scss';

export function Nav({ isMenu, showCreateForm, showLoginForm }) {

  return (
    <nav className={isMenu ? 'menu--active' : ''}>
      <ul>
        <li className='menu'>
          <a href='#' className='sign__in' onClick={showLoginForm}>
            Zaloguj się
          </a>
        </li>
        <li className='menu' onClick={showCreateForm}>
          <a href='#' className='sign__out'>
            Zarejestruj się
          </a>
        </li>
      </ul>
    </nav>
  );
}
