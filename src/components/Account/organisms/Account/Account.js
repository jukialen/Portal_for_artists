import React from 'react';
import AccountMenu from '../../molecules/AccountMenu/AccountMenu';
import AccountData from '../../molecules/AccountData/AccountData';
import GalleryAccount from '../../molecules/GalleryAccount/GalleryAccount';
import ProfileAccount from '../../molecules/ProfileAccount/ProfileAccount';

import './Account.scss';

export function Account() {
  return (
    <section to='/account'

             className="workspace">

      <h2 className="account__h2">Konto</h2>

      <AccountMenu />

      <AccountData />

      <GalleryAccount />

      <ProfileAccount />

    </section>
  )
}
