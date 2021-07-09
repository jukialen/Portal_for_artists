import React, { useContext } from 'react';
import { Create } from '../../components/organisms/NavForm/Create/Create';
import { Login } from '../../components/organisms/NavForm/Login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Authors } from '../Authors/Authors';
import { Terms } from '../Terms/Terms';
import { Privacy } from '../Privacy/Privacy';
import { Faq } from '../Faq/Faq';
import { Header } from '../../components/organisms/Header/Header';
import { Aside } from '../../components/organisms/Aside/Aside';
import { Footer } from '../../components/organisms/Footer/Footer';
import { Welcome } from '../Welcome/Welcome';
import { ModeContext } from '../../providers/ModeProvider';
import { ShowMenuProvider } from '../../providers/ShowMenuProvider';

export const UnauthorisedUser = () => {
  const { isMode } = useContext(ModeContext);

  return (
      <Router>
        <div className={`whole__page ${isMode ? 'dark' : ''}`}>
          <ShowMenuProvider>
            <Header
              titleFirstNav="Zaloguj się"
              titleSecondNav="Zarejestruj się"
            />
            <Create />
            <Login />
          </ShowMenuProvider>
          <Aside />
          <Switch>
            <Route exact path="/">
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
          <div className="up">
            <a href="#top__menu" aria-label="top of page button">
              ^
            </a>
          </div>
        </div>
        <Footer />
      </Router>
  );
};
