import { TextInputProps, TextStyle, ViewStyle } from 'react-native';

export type Props = TextInputProps & {
  viewStyle?: ViewStyle | ViewStyle[];
  titleText: string;
  value?: string;
  placeholder?: string;
  onChangeText?: (val: string) => void;
  style?: TextStyle;
  secure?: boolean;
  errorMessage?: string;
  mandatory?: boolean;
  description?: string;
  handled?: boolean;
  titleStyle?: any;
  inputStyle?: any;
};
