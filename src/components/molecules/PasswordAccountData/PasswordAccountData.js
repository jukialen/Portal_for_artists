import React from 'react';
import { Button } from '../../atoms/Button/Button';
import { Inputs } from '../../atoms/Inputs/Inputs';

export const PasswordAccountData = () => {
  return (
    <form>
      <label htmlFor="password">Hasło:</label>

      <Inputs
        idInputs="password"
        typeIput="password"
        placeholderInput="Wpisz aktualne hasło"
        required="required"
      />
      <Inputs
        typeInput="password"
        placeholderInput="Wpisz nowe hasło"
        required="required"
      />
      <Inputs
        typeInput="password"
        placeholderInput="Powtórz nowe hasło"
        required="required"
      />

      <Button
        typeButton="submit"
        title="Zmień hasło"
        ariaLabel="Submit new password"
      />
    </form>
  );
};
