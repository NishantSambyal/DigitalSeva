import { StyleSheet } from 'react-native';
import { horizontalScale } from 'src/helpers/basicStyles';
import { Theme } from 'src/theme';
export default (theme: Theme) =>
  StyleSheet.create({
    mainContainer: {
      backgroundColor: theme.colors.white,
      borderRadius: horizontalScale(5),
      zIndex: 1,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.blackTransparent,
    },
    keyboardView: {
      flexGrow: 1,
    },
    flex: { flex: 1 },
  });
