import React from 'react';
import Photos from '../../atoms/Photos';

import './GalleryAccount.scss';

function GalleryAccount() {
  return (
    <article
      id="user__gallery__in__account"
      className="user__gallery__in__account"
    >
      <em>Twoje zdjęcia i rysunki</em>

      <div className="user__photos">
        <Photos />
        <Photos />
        <Photos />
        <Photos />
        <Photos />
        <Photos />
      </div>

      <em>Polubione zdjęcia i rysunki</em>

      <div className="like__photos">
        <Photos />
        <Photos />
        <Photos />
        <Photos />
        <Photos />
        <Photos />
      </div>
    </article>
  );
}

export default GalleryAccount