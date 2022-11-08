import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackProps = {
  Dashboard;
  UploadDocument;
  Home;
  Login;
  Register;
  MyProfile;
  ReferAndEarn;
};

export type ActivitiesStack = NativeStackNavigationProp<RootStackProps>;
