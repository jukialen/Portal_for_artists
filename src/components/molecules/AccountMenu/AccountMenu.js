import React from 'react';

import './AccountMenu.scss';

function AccountMenu() {
  return (
    <article className='account__menu'>

      <div><a href='#account__data'>Ogólne</a></div>
      <div><a href='#user__gallery__in__account'>Galeria</a></div>
      <div><a href='#profile'>Profil</a></div>

    </article>
  );
}

export default AccountMenu;