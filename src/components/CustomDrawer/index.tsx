import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LoginActions } from 'src/store/actions/login.actions';
import { RootState } from 'src/store/reducers';
import { useStyles } from 'src/theme';
import TextView from '../TextView';
import style from './styles';

const CustomDrawer = props => {
  const dispatch = useDispatch();
  const styles = useStyles(style);
  const loginReducer = useSelector(
    (state: RootState) => state.loginReducer?.loginData,
  );
  const logoutUser = () => {
    dispatch(LoginActions.clearReducer());
  };
  return (
    <View style={styles.mainContainer}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.containerStyle}>
        <TouchableOpacity>
          <View style={styles.profileView}>
            <TextView style={styles.nameTitle}>
              {loginReducer.data.user_info?.name}
            </TextView>
            <View style={styles.flexRow}>
              <TextView style={styles.emailText}>
                {loginReducer.data.user_info?.email}
              </TextView>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.drawerItemContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomOptionWrapper}>
        <TouchableOpacity style={styles.bottomOptionText}>
          <TextView>Refer and Earn</TextView>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomOptionText} onPress={logoutUser}>
          <TextView>Sign Out</TextView>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
