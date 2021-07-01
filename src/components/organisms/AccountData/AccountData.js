import React from 'react';
import { SubscriptiomAccountData } from '../../molecules/SubscriptiomAccountData/SubscriptiomAccountData';
import { MailAccountData } from '../../molecules/MailAccountData/MailAccountData';
import { PasswordAccountData } from '../../molecules/PasswordAccountData/PasswordAccountData';

import './AccountData.scss';

export const AccountData = () => {
  return (
    <article id='account__data' className='account__data'>
      <SubscriptiomAccountData />

      <MailAccountData />

      <PasswordAccountData />
    </article>
  );
};