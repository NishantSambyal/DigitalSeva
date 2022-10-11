import { StyleSheet } from 'react-native';
import { fontScale, horizontalScale } from 'src/helpers/basicStyles';
import { Theme } from 'src/theme';
export default (theme: Theme) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    flexRow: {
      flexDirection: 'row',
    },
    containerStyle: {
      backgroundColor: theme.colors.blue,
    },
    emailText: {
      color: '#fff',
      marginRight: 5,
    },
    drawerItemContainer: { flex: 1, backgroundColor: '#fff', paddingTop: 10 },
    profileView: {
      padding: horizontalScale(10),
    },
    nameTitle: {
      color: theme.colors.white,
      fontSize: fontScale(18),
      marginBottom: 5,
    },
    bottomOptionWrapper: {
      padding: 20,
      borderTopWidth: 1,
      borderTopColor: '#ccc',
    },
    bottomOptionText: {
      paddingVertical: 15,
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 5,
    },
  });
