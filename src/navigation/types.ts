import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackProps = {
  Dashboard;
  UploadDocument: { productID: number };
  Home;
  Login;
  Register;
  MyProfile;
  ReferAndEarn;
  ChangePassword;
};

export type ActivitiesStack = NativeStackNavigationProp<RootStackProps>;
