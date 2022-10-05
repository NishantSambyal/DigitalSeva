import { Platform, StyleSheet } from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from 'src/helpers/basicStyles';
import { Theme } from 'src/theme';
export default (theme: Theme) =>
  StyleSheet.create({
    mainContainer: {
      paddingTop: Platform.OS === 'ios' ? verticalScale(40) : verticalScale(15),
      backgroundColor: theme.colors.blue,
      flexDirection: 'row',
      alignItems: 'center',
      padding: horizontalScale(15),
    },
    containerStyle: {
      backgroundColor: theme.colors.blue,
    },
    profileView: {
      padding: horizontalScale(10),
    },
    nameTitle: {
      color: theme.colors.white,
      fontSize: fontScale(18),
      marginBottom: 5,
    },
  });
