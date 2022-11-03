import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackProps = {
  Dashboard;
  UploadDocument;
  Home;
  Login;
  Register;
  MyProfile;
};

export type ActivitiesStack = NativeStackNavigationProp<RootStackProps>;
