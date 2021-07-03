import React from 'react';
import { Button } from '../../atoms/Button/Button';

export const SubscriptiomAccountData = () => {
  return (
    <form>
      <label htmlFor='subscription__info'>Subskrybcja:</label>
      <Button idButton='subscription__info' title='Aktualny plan' ariaLabel='Info about subscription'/>
      <Button classButton='subscription__check' title='Zmień' typeButton='text' ariaLabel='Change subscription' />
    </form>
  );
};
