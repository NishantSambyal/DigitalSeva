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
      backgroundColor: theme.colors.blue,
    },
    topContainer: {
      flex: 0.1,
      alignItems: 'center',
    },
    uploadTitle: {
      color: theme.colors.white,
      fontSize: fontScale(20),
      marginTop: verticalScale(20),
      fontWeight: 'bold',
    },
    uploadDescription: {
      color: theme.colors.white,
      fontSize: fontScale(15),
      marginTop: verticalScale(10),
      marginHorizontal: horizontalScale(16),
      textAlign: 'center',
    },
    bottomContainer: {
      flex: 1,
      backgroundColor: theme.colors.white,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
    },
    bottomSafeAreaView: {
      margin: verticalScale(20),
    },
    flexRow: {
      flexDirection: 'row',
      marginVertical: verticalScale(5),
    },
    uploadDocDescription: {
      marginLeft: horizontalScale(10),
    },
    imageIcon: {
      width: horizontalScale(60),
      height: horizontalScale(60),
    },
    bottomWrapper: {
      marginTop: verticalScale(20),
    },
    uploadNameTitle: {
      fontSize: fontScale(22),
      fontWeight: 'bold',
    },
    uploadButton: {
      backgroundColor: '#bbcc00',
      height: 60,
      justifyContent: 'center',
    },
    uploadButtonText: {
      fontSize: 18,
      marginLeft: 10,
    },
  });
