import React from 'react';

import { SubscriptiomAccountData } from 'frontend/src/components/molecules/SubscriptiomAccountData/SubscriptiomAccountData';
import { MailAccountData } from 'frontend/src/components/molecules/MailAccountData/MailAccountData';
import { PasswordAccountData } from 'frontend/src/components/molecules/PasswordAccountData/PasswordAccountData';

import './AccountData.scss';

export const AccountData = () => {
  return (
    <article id="account__data" className="account__data">
      <SubscriptiomAccountData />

      <MailAccountData />

      <PasswordAccountData />
    </article>
  );
};
