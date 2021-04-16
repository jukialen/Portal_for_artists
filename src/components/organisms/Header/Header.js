import React, { useState } from 'react';
import Nav from '../../molecules/Nav/Nav';
import '../../../generalSCSS/darkLightMode.scss';
import './Header.scss';

export function Header() {
  const [isMode, setMode] = useState('false');

  const changeMode = () => {
    setMode(!isMode);
  };

  return (
    <header>
      <h1 className="title">
        <a href="/">Portal dla artystów</a>
      </h1>

      <button
        className={isMode ? 'dark__mode' : 'light__mode'}
        onClick={changeMode}
      />

      <Nav />

      <button className="hamburger__menu" />
    </header>
  );
}

export default Header;
