import { StyleSheet } from 'react-native';
import { theme } from 'src/theme';
export default () =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    styleView: {
      flexGrow: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    logoContainer: {
      height: 200,
      justifyContent: 'center',
    },
    logo: {
      width: '100%',
    },
    formView: { height: 400 },
    emailView: { marginTop: 40 },
    passwordView: { marginTop: 20 },
    loginButton: { marginTop: 60 },
    bottomText: { textAlign: 'center', marginTop: 25 },
    createOne: { color: theme.colors.colorPrimaryDark, fontWeight: 'bold' },
  });
