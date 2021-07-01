import React from 'react';
import Wrapper from 'components/molecules/Wrapper/Wrapper';

import './Workspace.scss';

export function Workspace() {
  return (
    <section className="workspace">
      <h2 className="top__among__users">Najlepsze według użytkowników</h2>

      <Wrapper className="wrapper"/>

      <h2 className="subscribed">Zasubskrybowane</h2>

      <Wrapper className="wrapper"/>
    </section>
  );
}
