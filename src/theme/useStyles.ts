import { useMemo } from 'react';
import { useTheme } from './useTheme';

type FnType = (...args: any[]) => any;

export const useStyles = <T extends FnType>(stylesFn: T): ReturnType<T> => {
  const theme = useTheme();
  return useMemo(() => {
    return stylesFn(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stylesFn]);
};
