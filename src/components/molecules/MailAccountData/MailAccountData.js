import React from 'react';

export const MailAccountData = () => {
  return (
    <form>
      <label htmlFor='mail__change'>E-mail:</label>
      <input type='text' placeholder='Aktualny e-mail' />
      <button id='mail__change' type='submit'>
        Zmień adres e-mail
      </button>
    </form>
  );
};
