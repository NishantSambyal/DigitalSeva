import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { horizontalScale } from 'src/helpers/basicStyles';
import { useStyles, useTheme } from 'src/theme';
import { Icon } from '..';
import TextView from '../TextView';
import style from './styles';
import { Props } from './types';

const EditText: React.FC<Props> = ({
  viewStyle,
  titleText,
  value,
  onChangeText,
  placeholder,
  secure,
  errorMessage,
  mandatory,
  description,
  handled,
  titleStyle,
  inputStyle,
  ...rprops
}) => {
  const theme = useTheme();
  const styles = useStyles(style);
  const [passwordVisible, setPasswordVisible] = useState(true);

  const renderSubText = () => {
    if (description && !errorMessage) {
      return <TextView style={styles.phoneDescription}>{description}</TextView>;
    } else {
      return <TextView style={styles.errorStyle}>{errorMessage}</TextView>;
    }
  };
  return (
    <View style={viewStyle}>
      <View style={styles.titleWrapper}>
        <TextView style={[styles.titleText, titleStyle]}>{titleText}</TextView>
        {mandatory && <TextView style={styles.asterik}>*</TextView>}
      </View>
      <View
        style={[
          styles.mainContainer,
          errorMessage ? { borderColor: theme.colors.red } : null,
        ]}>
        <View style={styles.textContainer}>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={theme.colors.textGray}
            style={[styles.inputStyle, inputStyle]}
            secureTextEntry={secure && passwordVisible}
            textContentType="oneTimeCode"
            {...rprops}
          />
        </View>
        {secure && (
          <TouchableWithoutFeedback
            onPress={() => {
              setPasswordVisible(!passwordVisible);
            }}>
            <Icon
              style={styles.eyeIcon}
              family={'ionicon'}
              size={horizontalScale(18)}
              color={'textColor'}
              name={!passwordVisible ? 'eye' : 'eye-off'}
            />
          </TouchableWithoutFeedback>
        )}
      </View>
      {handled && renderSubText()}
    </View>
  );
};

export default EditText;
