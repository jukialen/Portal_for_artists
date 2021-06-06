import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import 'generalSCSS/reset.scss';

import { Header } from 'components/organisms/Header/Header';
import { Aside } from 'components/organisms/Aside/Aside';
import { Workspace } from 'components/organisms/workspace/Workspace';
import { Footer } from 'components/organisms/Footer/Footer';

import { DarkModeProvider } from 'providers/DarkModeProvider';
import { DarkModeContext } from 'providers/DarkModeProvider';
import { Create } from 'components/atoms/NavForm/Create/Create';
import { Login } from 'components/atoms/NavForm/Login/Login';

function App() {
  const { isMode } = useContext(DarkModeContext);

  return (
    <Router>
      <div className={`whole__page ${isMode ? 'dark' : ''}`}>
        <Header />
        <Aside />
        <DarkModeProvider>
          <Switch>
            <Route path="/">
              <Workspace />
            </Route>
          </Switch>
        </DarkModeProvider>
        <div className="up">
          <a href="#top__menu">^</a>
        </div>
      </div>
      <Footer />
      <Create />
      <Login />
    </Router>
  );
}

export default App;
