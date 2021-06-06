import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.scss';
import '../generalSCSS/reset.scss';

import { Header } from '../components/organisms/Header/Header';
import { Aside } from '../components/organisms/Aside/Aside';
import { Workspace } from '../components/organisms/workspace/Workspace';
import { Footer } from '../components/organisms/Footer/Footer';
import { Create } from '../components/atoms/NavForm/Create/Create';
import { Login } from '../components/atoms/NavForm/Login/Login';

import { DarkModeProvider } from 'providers/DarkModeProvider';
import { DarkModeContext } from 'providers/DarkModeProvider';

function App() {
  const { isMode } = useContext(DarkModeContext);

  return (
    <Router>
      <DarkModeProvider>
        <div className={`whole__page ${isMode ? 'dark' : ''}`}>
          <Header />
          <Aside />
          <Switch>
            <Route path="/">
              <Workspace />
            </Route>
          </Switch>
          <div className="up">
            <a href="#top__menu">^</a>
          </div>
        </div>
        <Footer />
        <Create />
        <Login />
      </DarkModeProvider>
    </Router>
  );
}

export default App;