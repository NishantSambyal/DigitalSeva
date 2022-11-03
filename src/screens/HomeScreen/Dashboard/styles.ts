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
      marginHorizontal: horizontalScale(16),
    },
    contentStyle: {
      paddingHorizontal: 16,
    },
    flexRow: {
      flexDirection: 'row',
    },
    categoryView: {
      backgroundColor: '#2596be',
      padding: 10,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
    },
    onlineServiceView: {
      backgroundColor: '#f1ba35',
      padding: 10,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
    },
    aboutUs: {
      backgroundColor: '#7cb85f',
      padding: 10,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
    },
    cardContainer: {
      shadowColor: theme.colors.textColor,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.26,
      elevation: 6,
      marginVertical: verticalScale(16),
      backgroundColor: theme.colors.white,
      // paddingHorizontal: horizontalScale(16),
      paddingBottom: verticalScale(16),
      borderRadius: 4,
    },
    titleText: {
      fontSize: fontScale(15),
      fontWeight: 'bold',
      padding: verticalScale(6),
      color: theme.colors.white,
    },
    icon: {
      width: horizontalScale(45),
      height: verticalScale(60),
    },
    iconContainer: {
      flex: 1,
      alignItems: 'center',
      marginTop: verticalScale(10),
    },
    iconText: {
      textAlign: 'center',
      fontSize: fontScale(10),
      fontWeight: 'bold',
    },
  });
