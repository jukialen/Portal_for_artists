import React, { useState, createContext, useCallback } from 'react';

export const NavFormContext = createContext({
  isLogin: false,
  isCreate: false,
  showLoginForm: () => {},
  showCreateForm: () => {},
});

export const NavFormProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(false);
  const [isCreate, setCreate] = useState(false);

  const showLoginForm = useCallback(() => setLogin(!isLogin), [isLogin]);

  const showCreateForm = useCallback(() => setCreate(!isCreate), [isCreate]);

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
