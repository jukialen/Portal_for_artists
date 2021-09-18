import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Create } from 'frontend/src/components/organisms/NavForm/Create/Create';
import { Login } from 'frontend/src/components/organisms/NavForm/Login/Login';
import { Authors } from '../Authors/Authors';
import { Terms } from '../Terms/Terms';
import { Privacy } from '../Privacy/Privacy';
import { Faq } from '../Faq/Faq';
import { Header } from 'frontend/src/components/organisms/Header/Header';
import { Aside } from 'frontend/src/components/organisms/Aside/Aside';
import { Footer } from 'frontend/src/components/organisms/Footer/Footer';

import { Welcome } from '../Welcome/Welcome';

import { ModeContext } from 'frontend/src/providers/ModeProvider';
import { ShowMenuProvider } from 'frontend/src/providers/ShowMenuProvider';

import { AffixButton } from 'frontend/src/components/molecules/AffixButton/AffixButton';

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
