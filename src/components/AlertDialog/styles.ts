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
      paddingVertical: horizontalScale(20),
      paddingHorizontal: horizontalScale(30),
      alignItems: 'center',
      width: '70%',
    },
    title: {
      fontSize: fontScale(20),
      fontWeight: 'bold',
      color: theme.colors.green,
      marginVertical: verticalScale(20),
    },
    descriptionStyle: {
      textAlign: 'center',
    },
    buttonStyle: {
      marginTop: 20,
      width: 120,
    },
  });
