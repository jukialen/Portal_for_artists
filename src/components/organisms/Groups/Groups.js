import React from 'react';
import './Groups.scss';
import { Button } from '../../atoms/Button/Button';
import { Links } from '../../atoms/Links/Links';

export const Groups = () => {
  return (
    <div className="groups">
      <Button classButton="groups__item" title="Dodaj grupę" />

      <Links
        hrefLink="#"
        classLink="groups__item"
        elementLink={<h4>Mangowcy Polska</h4>}
      />
      <Links
        hrefLink="#"
        classLink="groups__item"
        elementLink={<h4>Fani krajobrazów</h4>}
      />
      <Links
        hrefLink="#"
        classLink="groups__item"
        elementLink={<h4>Filmowcy World</h4>}
      />
      <Links
        hrefLink="#"
        classLink="groups__item"
        elementLink={<h4>Pomalowany świat</h4>}
      />
      <Links
        hrefLink="#"
        classLink="groups__item"
        elementLink={<h4>Ołówkiem po mapie</h4>}
      />
    </div>
  );
};
