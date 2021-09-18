import React from 'react';

import { Button } from 'frontend/src/components/atoms/Button/Button';

export const SubscriptiomAccountData = () => {
  return (
    <form>
      <label htmlFor="subscription__info">Subskrypcja:</label>
      <Button
        idButton="subscription__info"
        title="Aktualny plan"
        ariaLabel="Info about subscription"
      />
      <Button classButton="subscription__check" title="Zmień" ariaLabel="Change subscription" />
    </form>
  );
};
