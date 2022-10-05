import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useStyles } from 'src/theme';
import TextView from '../TextView';
import style from './styles';

const CustomDrawer = props => {
  const styles = useStyles(style);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.containerStyle}>
        <View style={styles.profileView}>
          <TextView style={styles.nameTitle}>John Doe</TextView>
          <View style={{ flexDirection: 'row' }}>
            <TextView
              style={{
                color: '#fff',
                marginRight: 5,
              }}>
              admin123@gmail.com
            </TextView>
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
          <DrawerItemList {...props} />
          <DrawerItem label="Help" onPress={() => alert('fdfd')} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextView
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
              Tell a Friend
            </TextView>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextView
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
              Sign Out
            </TextView>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
