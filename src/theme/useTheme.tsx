import { useContext } from 'react';
import { Theme, ThemeContext } from '.';

export const useTheme = () => {
  const { themeData } = useContext(ThemeContext);
  if (themeData == null) {
    throw new Error('useTheme() called outside of a ThemeProvider?');
  }
  return themeData as Theme;
};
