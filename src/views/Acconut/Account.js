import React from 'react';
import { AccountMenu } from '../../components/molecules/AccountMenu/AccountMenu';
import { AccountData } from '../../components/organisms/AccountData/AccountData';
import { GalleryAccount } from '../../components/organisms/GalleryAccount/GalleryAccount';
import { ProfileAccount } from '../../components/organisms/ProfileAccount/ProfileAccount';

import './Account.scss';

export function Account() {
  return (
    <section className="workspace">
      <h2 className="account__h2">Konto</h2>

      <AccountMenu />

      <AccountData />

      <GalleryAccount />

      <ProfileAccount />
    </section>
  );
}
