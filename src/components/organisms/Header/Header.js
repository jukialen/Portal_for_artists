import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import 'generalSCSS/darkLightMode.scss';
import './Header.scss';

import { Nav } from 'components/molecules/Nav/Nav';

import { ShowMenuProvider, ShowMenuContext } from 'providers/ShowMenuProvider';
import { DarkModeContext } from 'providers/DarkModeProvider';

export function Header() {
  const { isMode, changeMode } = useContext(DarkModeContext);

  const { isMenu, showMenu } = useContext(ShowMenuContext);

  return (
    <header>
      <h1 className="title">
        <NavLink to="/pl" href="/pl">
          Portal dla artystów
        </NavLink>
      </h1>

      <button
        className={isMode ? 'dark__mode' : 'light__mode'}
        onClick={changeMode}
      />

      <ShowMenuProvider>
        <Nav isMenu={isMenu} />
        <button className="hamburger__menu" onClick={showMenu} />
      </ShowMenuProvider>
    </header>
  );
}
