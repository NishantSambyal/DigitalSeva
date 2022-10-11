import React from 'react';
import { KeyboardAvoidingView, StatusBar, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useStyles, useTheme } from 'src/theme';
import Header from '../Header';
import stylesFn from './style';
import { Props } from './types';

const BaseScreen: React.FC<Props> = ({
  //bounces = false,
  children,
  title,
  disableScroll = false,
  disableBack,
  iconList,
  onClick,
  right,
  rightHandler,
  backHandler,
  menuOptions,
  rightIcon,
  navigationEnabled,
}) => {
  const styles = useStyles(stylesFn);
  const theme = useTheme();
  return (
    <View style={styles.mainContainer}>
      {title && (
        <Header
          title={title}
          disableBack={disableBack}
          iconList={iconList}
          onClick={(index, event) => onClick && onClick(index, event)}
          right={right}
          rightHandler={rightHandler}
          backHandler={backHandler}
          menuOptions={menuOptions}
          rightIcon={rightIcon}
          navigationEnabled={navigationEnabled}
        />
      )}
      {disableScroll ? (
        children
      ) : (
        // <KeyboardAwareScrollView
        // extraHeight={'100%'}
        // enableOnAndroid={true}
        // keyboardShouldPersistTaps="handled"
        // showsVerticalScrollIndicator={false}
        // contentContainerStyle={styles.KeyboardAvoidingViewContainerStyle}
        // style={styles.KeyboardAvoidingView}
        // bounces={bounces}>
        <KeyboardAvoidingView
          behavior="padding"
          contentContainerStyle={styles.KeyboardAvoidingViewContainerStyle}
          style={styles.KeyboardAvoidingView}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={theme.colors.colorPrimaryDark}
          />
          <View style={styles.contentView}>
            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              alwaysBounceHorizontal={false}
              keyboardShouldPersistTaps="handled"
              alwaysBounceVertical={false}
              bounces={false}>
              {children}
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
        // </KeyboardAwareScrollView>
      )}
    </View>
  );
};

export default BaseScreen;
