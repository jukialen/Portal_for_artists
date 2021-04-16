import React, { useState } from 'react';
import './Nav.scss';

function Nav() {
  const [isLogin, setLogin] = useState(false);
  const [isCreate, setCreate] = useState(false);

  const showLoginForm = () => {
    setLogin(!isLogin);
    // login.classList.toggle('form__menu--active');
  };
  const showCreateAccountForm = () => {
    setCreate(!isCreate);
    // createAccount.classList.toggle('form__menu--active');
  };

  return (
    <nav>
      <ul>
        <li className="menu">
          <a href="#" className="sign__in" onClick={showLoginForm}>
            Zaloguj się
          </a>
        </li>
        <li className="menu" onClick={showCreateAccountForm}>
          <a href="#" className="sign__out">
            Zarejestruj się
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
