import React from 'react';

export const PasswordAccountData = () => {
  return (
    <form>
      <label htmlFor='password'>Hasło:</label>
      <input
        id='password'
        type='password'
        placeholder='Wpisz aktualne hasło'
        required='required'
      />
      <input
        type='password'
        placeholder='Wpisz nowe hasło'
        required='required'
      />
      <input
        type='password'
        placeholder='Powtórz nowe hasło'
        required='required'
      />
      <button type='submit'>Zmień hasło</button>
    </form>
  );
};