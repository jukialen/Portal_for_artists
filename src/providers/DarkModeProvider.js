import React, { useState } from 'react';

export const DarkModeContext = React.createContext({
  isMode: false,
  changeMode: () => {},
});

export const DarkModeProvider = ({ children }) => {
  const [isMode, setMode] = useState('false');

  const changeMode = () => {
    setMode(!isMode);
  };

  return (
    <DarkModeContext.Provider
      value={{
        isMode,
        changeMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
