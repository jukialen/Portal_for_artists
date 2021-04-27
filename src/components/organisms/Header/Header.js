import React, { useContext } from 'react';

import 'generalSCSS/darkLightMode.scss';
import './Header.scss';

import { Nav } from 'components/molecules/Nav/Nav';

import { ShowMenuProvider } from 'providers/ShowMenuProvider';
import { DarkModeContext } from 'providers/DarkModeProvider';
import { ShowMenuContext } from 'providers/ShowMenuProvider';

export function Header() {
  const { isMode, changeMode } = useContext(DarkModeContext);

  const { showMenu } = useContext(ShowMenuContext);

  return (
    <ShowMenuProvider>
      <header>
        <h1 className="title">
          <a href="/">Portal dla artystów</a>
        </h1>

        <button
          className={isMode ? 'dark__mode' : 'light__mode'}
          onClick={changeMode}
        />

        <Nav />

        <button className="hamburger__menu" onClick={showMenu} />
      </header>
    </ShowMenuProvider>
  );
}
