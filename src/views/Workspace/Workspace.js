import React from 'react';

import { Wrapper } from 'components/organisms/Wrapper/Wrapper';

import './Workspace.scss';

export function Workspace() {
  return (
    <section className="workspace">
      <h2 className="top__among__users">TOP10 według użytkowników</h2>

      <Wrapper idWrapper='carouselTop' />

      <h2 className="liked">Ostatnie 10 polubionych</h2>

      <Wrapper idWrapper='carouselLiked' />
    </section>
  );
}
