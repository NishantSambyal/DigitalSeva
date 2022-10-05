import { StyleSheet } from 'react-native';
import { fontScale } from 'src/helpers/basicStyles';
import { Theme } from 'src/theme';
export default (theme: Theme) =>
  StyleSheet.create({
    text: {
      color: theme.colors.textColor,
      fontSize: fontScale(13),
      letterSpacing: 0.4,
    },
  });
