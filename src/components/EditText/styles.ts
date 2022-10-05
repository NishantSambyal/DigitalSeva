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
      borderWidth: 0.5,
      borderColor: theme.colors.buttonGrey,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 4,
    },
    titleWrapper: {
      flexDirection: 'row',
    },
    titleText: {
      fontSize: fontScale(12),
      color: theme.colors.textGray,
      marginVertical: verticalScale(4),
    },
    inputStyle: {
      fontSize: fontScale(12),
      color: theme.colors.textColor,
      padding: horizontalScale(10),
      letterSpacing: 0.2,
    },
    errorStyle: {
      color: theme.colors.red,
      fontSize: fontScale(12),
      paddingVertical: verticalScale(4),
    },
    phoneDescription: {
      color: theme.colors.textGray,
      fontSize: fontScale(12),
      paddingTop: verticalScale(4),
      paddingBottom: verticalScale(15),
    },
    asterik: {
      fontSize: fontScale(16),
      color: theme.colors.red,
      marginStart: horizontalScale(2),
    },
    textContainer: {
      flex: 1,
    },
    eyeIcon: {
      marginEnd: horizontalScale(15),
      color: theme.colors.textGray,
    },
  });
