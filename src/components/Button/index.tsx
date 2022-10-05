import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { useStyles } from 'src/theme';
import Icon from '../Icon';
import styleFn from './styles';
import { Props } from './types';

const Button: React.FC<Props> = ({
  onClick,
  buttonStyle,
  textStyle,
  text,
  isLoading,
  disabled = false,
  leftIcon,
}) => {
  const styles = useStyles(styleFn);
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[disabled ? styles.disabledButton : styles.button, buttonStyle]}
      disabled={disabled || isLoading}
      onPress={onClick}>
      {isLoading ? (
        <ActivityIndicator color={'white'} />
      ) : (
        <View style={styles.iconContainer}>
          {leftIcon && (
            <Icon
              name={leftIcon.name}
              family={leftIcon.family}
              color={leftIcon.color}
              size={leftIcon.size}
              style={styles.iconStyle}
            />
          )}
          <Text style={[styles.buttonText, textStyle]}>{text}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
