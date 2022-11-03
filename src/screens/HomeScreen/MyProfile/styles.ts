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
    profileImg: {
      height: horizontalScale(150),
      width: horizontalScale(150),
      borderRadius: horizontalScale(150) / 2,
      borderColor: theme.colors.gray,
      borderWidth: 1,
      alignSelf: 'center',
      marginTop: verticalScale(16),
    },
    marginTop: {
      marginTop: 20,
    },
    title: {
      color: theme.colors.gray,
    },
    description: {
      color: theme.colors.black,
      fontWeight: '600',
      fontSize: fontScale(18),
      marginBottom: verticalScale(20),
    },
    editDescription: {
      color: theme.colors.black,
      fontWeight: '600',
      fontSize: fontScale(18),
      marginBottom: verticalScale(20),
      borderWidth: 1,
      borderColor: theme.colors.gray,
      borderRadius: 6,
      padding: verticalScale(8),
      marginTop: verticalScale(4),
    },
    submitButton: {
      marginBottom: verticalScale(20),
    },
    arrow: {
      fontSize: fontScale(12),
    },

    dropdown: {
      marginBottom: verticalScale(20),
      height: 50,
      borderWidth: 1,
      borderColor: theme.colors.gray,
      borderRadius: 6,
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: fontScale(18),
      fontWeight: '600',
      color: theme.colors.black,
      marginHorizontal: verticalScale(8),
    },
    selectedTextStyle: {
      fontSize: fontScale(18),
      fontWeight: '600',
      color: theme.colors.black,
      marginHorizontal: verticalScale(8),
    },
    iconStyle: {
      width: 20,
      height: 20,
      marginHorizontal: verticalScale(8),
    },
  });
