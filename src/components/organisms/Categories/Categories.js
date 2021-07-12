import React from 'react';
import './Categories.scss';
import { Links } from '../../atoms/Links/Links';

export const Categories = () => {
  return (
    <ol className="categories">
      <li>
        <Links hrefLink="#" title="Wszystko" />
      </li>

      <li>
        <Links hrefLink="#" title="Rysunki" />

        <ol>
          <li>
            <Links hrefLink="#" title="Realistyczne" />
          </li>
          <li>
            <Links hrefLink="#" title="Manga" />
          </li>
          <li>
            <Links hrefLink="#" title="Anime" />
          </li>
          <li>
            <Links hrefLink="#" title="Komiksy" />
          </li>
        </ol>
      </li>

      <li>
        <Links hrefLink="#" title="Fotografie" />
      </li>
      <li>
        <Links hrefLink="#" title="Animacje" />
      </li>
      <li>
        <Links hrefLink="#" title="Inne" />
      </li>
    </ol>
  );
};
