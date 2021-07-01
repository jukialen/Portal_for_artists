import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import 'generalSCSS/reset.scss';

import { Header } from 'components/organisms/Header/Header';
import { Aside } from 'components/organisms/Aside/Aside';
import { Workspace } from 'views/Workspace/Workspace';
import { Footer } from 'components/organisms/Footer/Footer';

import { Create } from 'components/organisms/NavForm/Create/Create';
import { Login } from 'components/organisms/NavForm/Login/Login';

import { Authors } from 'views/Authors/Authors';
import { Terms } from 'views/Terms/Terms';
import { Privacy } from 'views/Privacy/Privacy';
import { Faq } from '../Faq/Faq';
import { Account } from '../Acconut/Account';

export function App() {
  //DARK MODE
  const [isMode, setMode] = useState(false);

  const changeMode = () => {
    setMode(!isMode);
  };

  // OPEN AND HIDE NAVIGATION FORMS

  const [isLogin, setLogin] = useState();
  const [isCreate, setCreate] = useState();

  const showLoginForm = () => setLogin(!isLogin);

  const showCreateForm = () => setCreate(!isCreate);

  return (
    <Router>
      <div className={`whole__page ${isMode ? 'dark' : ''}`}>
        <Header
          isMode={isMode}
          changeMode={changeMode}
          showLoginForm={showLoginForm}
          showCreateForm={showCreateForm}
        />
        <Create isCreate={isCreate} />
        <Login isLogin={isLogin} />
        <Aside />
        <Switch>
          <Route exact path='/'>
            <Workspace isMode={isMode} />
          </Route>
          <Route path='/authors'>
            <Authors />
          </Route>
          <Route path='/terms'>
            <Terms />
          </Route>
          <Route path='/privacy'>
            <Privacy />
          </Route>
          <Route path='/faq'>
            <Faq />
          </Route>
          <Route path='/account'>
            <Account />
          </Route>
        </Switch>
        <div className='up'>
          <a href='#top__menu' aria-label='top of page button'>
            ^
          </a>
        </div>
      </div>
      <Footer />
    </Router>
  );
}
