import React, { useCallback } from 'react';

import { useLocalState } from 'hooks/useLocalState';

export const ModeContext = React.createContext({
  inMode: false,
  changeMode: () => {},
});

export const ModeProvider = ({ children }) => {
  const [isMode, setMode] = useLocalState(false, 'mode');

  const changeMode = useCallback(() => setMode(!isMode), [isMode]);

  return (
    <ModeContext.Provider
      value={{
        isMode,
        changeMode,
      }}
    >
      {children}
    </ModeContext.Provider>
  );
};
