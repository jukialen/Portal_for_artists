import React, { useState } from 'react';

import Categories from '../../atoms/Categories/Categories';
import Groups from '../../atoms/Groups/Groups';
import Friends from '../../atoms/Friends/Friends';

import './Aside.scss';

export function Aside() {
  const [isLeftMenu, setLeftMenu] = useState(false);
  const leftMenuClick = () => setLeftMenu(!isLeftMenu);

  return (
    <aside
      id='top__menu'
      className={`aside ${isLeftMenu ? 'aside--active' : ''}`}
    >
      <button className='aside__right' aria-label='left menu button' onClick={leftMenuClick}>
        X
      </button>

      <h3 className={`${isLeftMenu ? 'first__h3' : ''}`}>Kategorie</h3>

      <Categories />

      <h3>Grupy</h3>

      <Groups />

      <h3>Przyjaciele</h3>

      <Friends />

      <div>
        <a href="#">
          <h3 className="contact">Kontakt</h3>
        </a>
      </div>
    </aside>
  );
}
