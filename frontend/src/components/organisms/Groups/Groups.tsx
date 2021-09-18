import React from 'react';

import { Button } from 'frontend/src/components/atoms/Button/Button';
import { Links } from 'frontend/src/components/atoms/Links/Links';

import './Groups.scss';

export const Groups = () => {
  return (
    <div className="groups">
      <Button classButton="groups__item" title="Dodaj grupę" ariaLabel="Adding a group" />

      <Links hrefLink="#" classLink="groups__item" elementLink={<h4>Mangowcy Polska</h4>} />
      <Links hrefLink="#" classLink="groups__item" elementLink={<h4>Fani krajobrazów</h4>} />
      <Links hrefLink="#" classLink="groups__item" elementLink={<h4>Filmowcy World</h4>} />
      <Links hrefLink="#" classLink="groups__item" elementLink={<h4>Pomalowany świat</h4>} />
      <Links hrefLink="#" classLink="groups__item" elementLink={<h4>Ołówkiem po mapie</h4>} />
    </div>
  );
};
