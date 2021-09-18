import React, { useState } from 'react';

import { Categories } from '../Categories/Categories';
import { Groups } from '../Groups/Groups';
import { Friends } from 'frontend/src/components/molecules/Friends/Friends';
import { Links } from 'frontend/src/components/atoms/Links/Links';
import { Button } from 'frontend/src/components/atoms/Button/Button';

import './Aside.scss';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';

export function Aside() {
  const [isLeftMenu, setLeftMenu] = useState<boolean>(false);

  const leftMenuClick = () => setLeftMenu(!isLeftMenu);

  return (
    <aside id="top__menu" className={`aside ${isLeftMenu ? 'aside--active' : ''}`}>
      <Button
        elementButton={isLeftMenu ? <LeftOutlined /> : <RightOutlined />}
        classButton="aside__right"
        ariaLabel="left menu button"
        // @ts-ignore
        onClick={leftMenuClick}
      />

      <h3 className={`${isLeftMenu ? 'first__h3' : ''}`}>Kategorie</h3>

      <Categories />

      <h3>Grupy</h3>

      <Groups />

      <h3>Przyjaciele</h3>

      <Friends />

      <div>
        <Links hrefLink="#" elementLink={<h3 className="contact">Kontakt</h3>} />
      </div>
    </aside>
  );
}