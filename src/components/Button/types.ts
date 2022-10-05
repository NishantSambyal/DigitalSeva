import { TextStyle } from 'react-native';
import { Props as IconProp } from '../Icon/types';

export type Props = {
  onClick?: () => void;
  buttonStyle?: any;
  textStyle?: TextStyle | TextStyle[];
  text?: string;
  isLoading?: boolean;
  disabled?: boolean;
  leftIcon?: IconProp;
};
