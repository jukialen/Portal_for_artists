import React from 'react';
import SubscriptionAccountData from '../../atoms/SubscriptiomAccountData';
import MailAccountData from '../../atoms/MailAccountData';
import PasswordAccountData from '../../atoms/PasswordAccountData';

import './AccountData.scss';

function AccountData() {
  return (
    <article id="account__data" className="account__data">
      <SubscriptionAccountData />

      <MailAccountData />

      <PasswordAccountData />
    </article>
  );
}

export default AccountData;
