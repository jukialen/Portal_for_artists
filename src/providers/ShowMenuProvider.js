import React, { useState } from 'react';

export const ShowMenuContext = React.createContext({
  isMenu: false,
  showMenu: () => {},
});

export const ShowMenuProvider = ({ children }) => {
  const [isMenu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(!isMenu);
  };

  return (
    <ShowMenuContext.Provider
      value={{
        isMenu,
        showMenu,
      }}
    >
      {children}
    </ShowMenuContext.Provider>
  );
};
