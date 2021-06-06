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

  const showLoginForm = () => setLogin(!isLogin);

  const showCreateForm = () => setCreate(!isCreate);

  return (
    <NavFormContext.Provider
      value={{
        isLogin,
        showLoginForm,
        isCreate,
        showCreateForm,
      }}
    >
      {children}
    </NavFormContext.Provider>
  );
};
