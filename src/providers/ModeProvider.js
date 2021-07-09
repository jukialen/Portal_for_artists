import React, { useCallback, useMemo, useState } from 'react';

export const ModeContext = React.createContext({
  inMode: false,
  changeMode: () => {},
});

export const ModeProvider = ({ children }) => {
  const [isMode, setMode] = useState(false);

  const changeMode = useCallback(() => setMode(!isMode), [isMode]);

  return (
    <ModeContext.Provider
      value={{
        isMode,
        changeMode
      }}
    >
      {children}
    </ModeContext.Provider>
  )
}