import { ViewStyle } from 'react-native';
import { IconTypes } from 'src/assets/icons';

export type IconProps = {
  size?: number;
  width?: number;
  containerStyle?: ViewStyle;
  name?: IconTypes | string;
  style?: object;
  onPress?: () => void;
};

export type IconFamily =
  | 'zocial'
  | 'octicon'
  | 'material'
  | 'material-community'
  | 'ionicon'
  | 'foundation'
  | 'evilicons'
  | 'entypo'
  | 'font-awesome'
  | 'font-awesome-5'
  | 'simple-line-icon'
  | 'feather'
  | 'antdesign'
  | 'custom';

export type Props = IconProps & {
  name: string;
  size?: number;
  color?: string;
  solid?: boolean;
  family: IconFamily;
};
