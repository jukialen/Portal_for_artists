import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from 'frontend/src/components/organisms/Header/Header';
import { Aside } from 'frontend/src/components/organisms/Aside/Aside';
import { Workspace } from '../Workspace/Workspace';
import { Authors } from '../Authors/Authors';
import { Terms } from '../Terms/Terms';
import { Privacy } from '../Privacy/Privacy';
import { Faq } from '../Faq/Faq';
import { Account } from '../Account/Account';
import { Footer } from 'frontend/src/components/organisms/Footer/Footer';

import { ModeContext } from 'frontend/src/providers/ModeProvider';

import { AffixButton } from 'frontend/src/components/molecules/AffixButton/AffixButton';

export const AuthorisedUser = () => {
  const { isMode } = useContext(ModeContext);

  return (
    <Router>
      <div className={`whole__page ${isMode ? 'dark' : ''}`}>
        <Header titleFirstNav="Wyloguj" titleSecondNav="Konto" />
        <Aside />
        <Switch>
          <Route exact={true} path="/app">
            <Workspace />
          </Route>
          <Route exact={true} path="/app">
            <Workspace />
          </Route>
          <Route path="/authors">
            <Authors />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>
        <AffixButton />
      </div>
      <Footer />
    </Router>
  );
};
