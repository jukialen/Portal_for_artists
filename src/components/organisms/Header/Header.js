import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import 'generalSCSS/darkLightMode.scss';
import './Header.scss';

import { Nav } from 'components/molecules/Nav/Nav';

export function Header({ isMode, changeMode, showCreateForm, showLoginForm }) {
  const [isMenu, setMenu] = useState('');

  const showMenu = () => {
    setMenu(!isMenu);
  };

  return (
    <header>
      <h1 className='title'>
        <NavLink to='/'>Portal dla artystów</NavLink>
      </h1>

      <button
        className={isMode ? 'light__mode' : 'dark__mode'}
        aria-label='mode button'
        onClick={changeMode}
      />

      <Nav isMenu={isMenu} showCreateForm={showCreateForm} showLoginForm={showLoginForm} />
      <button
        className='hamburger__menu'
        aria-label='menu button'
        onClick={showMenu}
      />
    </header>
  );
}
