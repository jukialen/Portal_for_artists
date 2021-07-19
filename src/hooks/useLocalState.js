import React from 'react';

export const useLocalState = (defaultValue, key) => {
  const [value, setValue] = React.useState(() => {
    const localValue = localStorage.getItem(key);
    return localValue !== null
      ? JSON.parse(localValue)
      : defaultValue;
  });
  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}