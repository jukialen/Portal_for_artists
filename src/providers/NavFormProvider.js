import React, { useState } from 'react';

export const NavFormContext = React.createContext({
  isLogin: false,
  isCreate: false,
  showLoginForm: () => {},
  showCreateAccountForm: () => {},
});

export const NavFormProvider = ({ children }) => {
  const [isLogin, setLogin] = useState();
  const [isCreate, setCreate] = useState();

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
