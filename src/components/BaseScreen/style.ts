import { StyleSheet } from 'react-native';
// import {verticalScale} from 'src/helpers/basicStyles';
import { Theme } from 'src/theme';

export default (theme: Theme) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    contentView: {
      flex: 1,
      // paddingBottom: verticalScale(30),
    },
    container: {
      flex: 1,
      backgroundColor: theme.colors.blue,
    },
    KeyboardAvoidingView: {
      flex: 1,
    },
    KeyboardAvoidingViewContainerStyle: {
      flexGrow: 1,
      justifyContent: 'space-between',
    },
  });
