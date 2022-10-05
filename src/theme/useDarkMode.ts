import { useContext } from 'react';
import { ThemeContext } from '.';

export const useDarkMode = () => {
  const { switchDarkMode } = useContext(ThemeContext);
  if (switchDarkMode == null) {
    throw new Error('useDarkMode() called outside of a ThemeProvider?');
  }
  return switchDarkMode as any;
};
