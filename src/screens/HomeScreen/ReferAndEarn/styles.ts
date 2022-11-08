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
      margin: horizontalScale(16),
    },
    referEarn: {
      width: '100%',
      height: 230,
      marginVertical: verticalScale(40),
    },
    referTitle: {
      fontSize: fontScale(20),
      fontWeight: 'bold',
      textAlign: 'center',
    },
    referDesc: {
      textAlign: 'center',
      marginTop: verticalScale(10),
      color: theme.colors.textGray,
      fontSize: fontScale(13),
    },
    referQues: {
      fontSize: fontScale(16),
      marginTop: verticalScale(20),
      fontWeight: 'bold',
      textAlign: 'center',
      color: theme.colors.darkGreen,
    },
    referCodeTxt: {
      textAlign: 'center',
      marginTop: verticalScale(40),
      color: theme.colors.textGray,
      fontSize: fontScale(13),
      fontWeight: 'bold',
    },
    referCode: {
      borderWidth: 1,
      alignSelf: 'center',
      textAlign: 'center',
      borderColor: theme.colors.buttonGrey,
      backgroundColor: theme.colors.gray6,
      paddingVertical: horizontalScale(10),
      paddingHorizontal: horizontalScale(40),
      marginTop: verticalScale(10),
      fontSize: fontScale(20),
      fontWeight: 'bold',
    },
    referButton: {
      marginTop: verticalScale(40),
    },
  });
