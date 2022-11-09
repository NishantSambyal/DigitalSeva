import { StyleSheet } from 'react-native';
import { horizontalScale } from 'src/helpers/basicStyles';

export default () =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      marginHorizontal: horizontalScale(16),
    },
    changePassImg: {
      width: '100%',
      height: 300,
    },
    passwordView: { marginTop: 20 },
    loginButton: { marginTop: 60 },
  });
