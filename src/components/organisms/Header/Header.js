import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import 'generalSCSS/darkLightMode.scss';
import './Header.scss';

import { Nav } from 'components/molecules/Nav/Nav';
import { Button } from 'components/atoms/Button/Button';

import { ModeContext } from 'providers/ModeProvider';
import { ShowMenuContext } from 'providers/ShowMenuProvider';

import { currentUser } from "firebaseConfig";

export function Header({ titleFirstNav, titleSecondNav }) {
  const { isMode, changeMode } = useContext(ModeContext);

  const { showMenu } = useContext(ShowMenuContext);

  return (
    <header>
      <h1 className="title">
        <NavLink to={currentUser ? '/app' : '/'}>Portal dla artystów</NavLink>
      </h1>

      <Button
        classButton={isMode ? 'light__mode' : 'dark__mode'}
        ariaLabel="mode button"
        onClick={changeMode}
      />

      <Nav titleFirstNav={titleFirstNav} titleSecondNav={titleSecondNav} />

      <Button
        classButton="hamburger__menu"
        ariaLabel="menu button"
        onClick={showMenu}
      />
    </header>
  );
}
