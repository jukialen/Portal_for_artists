import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.scss';
import '../generalSCSS/reset.scss';

import Header from '../components/organisms/Header/Header';
import Aside from '../components/organisms/Aside/Aside';
import Workspace from '../components/organisms/workspace/Workspace';
import Footer from '../components/organisms/Footer/Footer';
import Create from '../components/atoms/NavForm/Create/Create';
import Login from '../components/atoms/NavForm/Login/Login';
// import UsersProvider from 'providers/UsersProvider';

function App() {
  return (
    <Router>
      <div className="whole__page">
        <Header />
        <Aside />
        {/*<UsersProvider>*/}
        <Switch>
          <Route path="/">
            <Workspace />
          </Route>
        </Switch>
        {/*</UsersProvider>*/}
        <div className="up">
          <Link href="#top__menu">^</Link>
        </div>
      </div>
      <Footer />
      <Create />
      <Login />
    </Router>
  );
}

export default App;
