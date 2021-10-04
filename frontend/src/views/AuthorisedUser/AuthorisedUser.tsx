import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';

import { Header } from 'components/organisms/Header/Header';
import { Aside } from 'components/organisms/Aside/Aside';
import { Workspace } from 'views/Workspace/Workspace';
import { Authors } from 'views/Authors/Authors';
import { Terms } from 'views/Terms/Terms';
import { Privacy } from 'views/Privacy/Privacy';
import { Faq } from 'views/Faq/Faq';
import { Account } from 'views/Account/Account';
import { Footer } from 'components/organisms/Footer/Footer';

import { ModeContext } from 'providers/ModeProvider';

import { AffixButton } from 'components/molecules/AffixButton/AffixButton';

export const AuthorisedUser = () => {
  const { isMode } = useContext(ModeContext);

  const user = localStorage.getItem('user');

  const history = useHistory();
  useEffect(() => {
    !user && history.push('/');
  }, [user]);

  return (
    <Router>
      <div className={`whole__page ${isMode ? 'dark' : ''}`}>
        <Header titleFirstNav="Wyloguj" titleSecondNav="Konto" />
        <Aside />
        <Switch>
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
          <Route path="/app/account">
            <Account />
          </Route>
        </Switch>
        <AffixButton />
      </div>
      <Footer />
    </Router>
  );
};
