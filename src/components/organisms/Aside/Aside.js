import React, { useState } from 'react';

import { Categories } from '../Categories/Categories';
import { Groups } from '../Groups/Groups';
import { Friends } from '../../molecules/Friends/Friends';

import './Aside.scss';
import { Links } from '../../atoms/Links/Links';
import { Button } from '../../atoms/Button/Button';

export function Aside() {
  const [isLeftMenu, setLeftMenu] = useState(false);
  const leftMenuClick = () => setLeftMenu(!isLeftMenu);

  return (
    <aside
      id='top__menu'
      className={`aside ${isLeftMenu ? 'aside--active' : ''}`}
    >
      <Button elementButton='X' classButton='aside__right' ariaLabel='left menu button' onClick={leftMenuClick} />

      <h3 className={`${isLeftMenu ? 'first__h3' : ''}`}>Kategorie</h3>

      <Categories />

      <h3>Grupy</h3>

      <Groups />

      <h3>Przyjaciele</h3>

      <Friends />

      <div>
        <Links hrefLink='#' elementLink={<h3 className='contact'>Kontakt</h3>} />
      </div>
    </aside>
  )
}
