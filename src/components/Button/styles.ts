import { StyleSheet } from 'react-native';
import { horizontalScale } from 'src/helpers/basicStyles';
import { Theme } from 'src/theme';

export default (theme: Theme) =>
  StyleSheet.create({
    button: {
      backgroundColor: theme.colors.blue,
      padding: horizontalScale(10),
      borderRadius: horizontalScale(7),
      alignItems: 'center',
    },
    disabledButton: {
      padding: horizontalScale(10),
      backgroundColor: theme.colors.buttonGrey,
      borderRadius: horizontalScale(7),
      alignItems: 'center',
    },
    buttonText: {
      fontSize: horizontalScale(13),
      color: theme.colors.white,
    },
    iconContainer: { flexDirection: 'row', alignItems: 'center' },
    iconStyle: { marginRight: 5 },
  });
