import { StyleSheet } from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from 'src/helpers/basicStyles';
import { Theme } from 'src/theme';

export default (theme: Theme) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.colors.blue,
    },
    topContainer: {
      flex: 0.2,
      alignItems: 'center',
    },
    uploadTitle: {
      color: theme.colors.white,
      fontSize: fontScale(20),
      marginTop: verticalScale(20),
      fontWeight: 'bold',
    },
    uploadDescription: {
      color: theme.colors.white,
      fontSize: fontScale(15),
      marginTop: verticalScale(10),
      marginHorizontal: horizontalScale(16),
      textAlign: 'center',
    },
    bottomContainer: {
      flex: 1,
      backgroundColor: theme.colors.white,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
    },
    bottomSafeAreaView: {
      margin: verticalScale(20),
    },
  });
