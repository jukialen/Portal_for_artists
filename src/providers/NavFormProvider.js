import React, { useState } from 'react';

export const NavFormContext = React.createContext({
  isLogin: '',
  isCreate: '',
  showLoginForm: () => {},
  showCreateAccountForm: () => {},
});

export const NavFormProvider = ({ children }) => {
  const [isLogin, setLogin] = useState('false');
  const [isCreate, setCreate] = useState('false');

  const showLoginForm = () => {
    setLogin(!isLogin);
    // login.classList.toggle('form__menu--active');
  };
  const showCreateAccountForm = () => {
    setCreate(!isCreate);
    // createAccount.classList.toggle('form__menu--active');
  };

  return (
    <NavFormContext.Provider
      value={{
        isLogin,
        showLoginForm,
        isCreate,
        showCreateAccountForm,
      }}
    >
      {children}
    </NavFormContext.Provider>
  );
};
