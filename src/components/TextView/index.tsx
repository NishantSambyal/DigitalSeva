import React from 'react';
import { Text } from 'react-native';
import { useStyles } from 'src/theme';
import rStyle from './styles';
import { Props } from './types';

const TextView: React.FC<Props> = ({ style, children, onPress, ...rest }) => {
  const styles = useStyles(rStyle);

  return (
    <Text onPress={onPress} style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
};

export default TextView;
