import React from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useStyles } from 'src/theme';
import style from './styles';
import { Props } from './types';

const DimModal: React.FC<Props> = ({
  visibility,
  setVisibility,
  children,
  animationType,
  containerStyle,
}) => {
  const styles = useStyles(style);

  const dismissDialog = () => {
    setVisibility && setVisibility(false);
  };
  return (
    <View>
      <Modal
        animationType={animationType || 'fade'}
        transparent={true}
        visible={visibility}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          contentContainerStyle={styles.keyboardView}
          style={styles.flex}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={dismissDialog}
            style={containerStyle || styles.centeredView}>
            <TouchableWithoutFeedback>
              <View style={styles.mainContainer}>{children}</View>
            </TouchableWithoutFeedback>
            <View />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

export default DimModal;
