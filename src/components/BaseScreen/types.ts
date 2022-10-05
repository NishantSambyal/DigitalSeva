import { ViewStyle } from 'react-native';

export type Props = {
  style?: ViewStyle;
  bounces?: boolean;
  children?: React.ReactNode;
  title: string;
  disableScroll?: boolean;
  disableBack?: boolean;
  iconList?: any;
  onClick?: (index: number, event?: any) => void | undefined;
  right?: any;
  rightHandler?: any;
  backHandler?: any;
  menuOptions?: any;
  rightIcon?: any;
  navigationEnabled?: any;
};
