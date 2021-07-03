import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import 'generalSCSS/darkLightMode.scss';
import './Header.scss';

import { Nav } from 'components/molecules/Nav/Nav';
import { Button } from '../../atoms/Button/Button';

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

      <Button classButton={isMode ? 'light__mode' : 'dark__mode'} ariaLabel='mode button' onClick={changeMode} />

      <Nav isMenu={isMenu} showCreateForm={showCreateForm} showLoginForm={showLoginForm} />

      <Button classButton='hamburger__menu' ariaLabel='menu button' onClick={showMenu} />
    </header>
  );
}
