import React from 'react';
import TopWrapper from '../../molecules/TopWrapper/TopWrapper';
import SubscribedWrapper from '../../molecules/SubscribedWrapper/SubscribedWrapper';

import 'components/organisms/workspace/Workspace.scss';

function Workspace() {
  return (
    <section className="workspace">
      <h2 className="top__among__users">Najlepsze według użytkowników</h2>

      <TopWrapper />

      <h2 className="subscribed">Zasubskrybowane</h2>

      <SubscribedWrapper className="subscribed__wrapper" />
    </section>
  );
}

export default Workspace;
