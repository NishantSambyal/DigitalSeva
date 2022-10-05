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
    backArrow: {
      fontSize: fontScale(22),
      color: theme.colors.white,
    },
    headerText: {
      flex: 1,
      fontSize: fontScale(22),
      marginHorizontal: horizontalScale(12),
      color: theme.colors.white,
      textTransform: 'capitalize',
    },
    listContainer: {
      alignItems: 'center',
    },
    listItemContainer: {
      paddingRight: verticalScale(12),
    },
  });
