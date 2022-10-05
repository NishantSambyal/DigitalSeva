import React, { useState } from 'react';
import { defaultTheme } from './theme';

export const ThemeContext = React.createContext(null);

interface ThemeProviderProps {
  theme?: typeof defaultTheme;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  const [isDarkMode, setDarkMode] = useState(false);
  const switchDarkMode = (useMode: boolean): void => {
    setDarkMode(useMode);
  };
  const themeData = theme?.(isDarkMode);
  const value = { themeData, switchDarkMode };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

ThemeProvider.defaultProps = {
  theme: defaultTheme,
};

export { ThemeProvider };
