import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Create } from 'components/organisms/NavForm/Create/Create';
import { Login } from 'components/organisms/NavForm/Login/Login';
import { Authors } from 'views/Authors/Authors';
import { Terms } from 'views/Terms/Terms';
import { Privacy } from 'views/Privacy/Privacy';
import { Faq } from 'views/Faq/Faq';
import { Header } from 'components/organisms/Header/Header';
import { Aside } from 'components/organisms/Aside/Aside';
import { Footer } from 'components/organisms/Footer/Footer';

import { Welcome } from 'views/Welcome/Welcome';

import { ModeContext } from 'providers/ModeProvider';
import { ShowMenuProvider } from 'providers/ShowMenuProvider';

import { AffixButton } from 'components/molecules/AffixButton/AffixButton';

export const UnauthorisedUser = () => {
  const { isMode } = useContext(ModeContext);

  return (
    <Router>
      <div className={`whole__page ${isMode ? 'dark' : ''}`}>
        <ShowMenuProvider>
          <Header titleFirstNav="Zaloguj się" titleSecondNav="Zarejestruj się" />
          <Create />
          <Login />
        </ShowMenuProvider>
        <Aside />
        <Switch>
          <Route exact={true} path="/">
            <Welcome />
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
        </Switch>
        <AffixButton />
      </div>
      <Footer />
    </Router>
  );
};
