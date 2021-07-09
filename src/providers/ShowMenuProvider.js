import React, { useState, createContext, useCallback } from 'react';

export const ShowMenuContext = createContext({
  isMenu: false,
  showMenu: () => {},
});

export const ShowMenuProvider = ({ children }) => {
  const [isMenu, setMenu] = useState('');

  const showMenu = useCallback(() => setMenu(!isMenu), [isMenu]);

  return (
    <ShowMenuContext.Provider
      value={{
        isMenu,
        showMenu
      }}
    >
      {children}
    </ShowMenuContext.Provider>
  );
};
