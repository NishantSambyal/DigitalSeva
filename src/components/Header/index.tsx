import { DrawerActions } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import useMyNavigation from 'src/helpers/useNavigation';
import { theme, useStyles } from 'src/theme';
import Icon from '../Icon';
import TextView from '../TextView';
import style from './styles';
import { Props } from './types';

const Header: React.FC<Props> = ({
  title,
  disableBack,
  iconList,
  onClick,
  right,
  rightHandler,
  backHandler,
  menuOptions,
  rightIcon,
  navigationEnabled,
}) => {
  const navigation = useMyNavigation();
  const styles = useStyles(style);
  return (
    <View style={styles.mainContainer}>
      {!disableBack && (
        <TouchableOpacity
          onPress={() => {
            backHandler ? backHandler() : navigation.goBack();
          }}>
          <Icon name="arrow-left" family="feather" style={styles.backArrow} />
        </TouchableOpacity>
      )}
      {navigationEnabled && (
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}>
          <Icon name="three-bars" family="octicon" style={styles.backArrow} />
        </TouchableOpacity>
      )}

      <TextView style={styles.headerText}>{title}</TextView>
      {right && rightHandler && (
        <TouchableOpacity onPress={rightHandler}>
          <Text style={{ color: theme.colors.white }}>{right}</Text>
        </TouchableOpacity>
      )}
      {rightIcon && rightHandler && (
        <TouchableOpacity onPress={rightHandler}>{rightIcon}</TouchableOpacity>
      )}
      {menuOptions && <View>{menuOptions}</View>}
      {iconList?.length > 0 && (
        <View>
          <FlatList
            contentContainerStyle={styles.listContainer}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            data={iconList}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={styles.listItemContainer}
                onPress={onClick?.bind(this, index)}>
                <Icon
                  name={item.name}
                  family={item.family}
                  style={styles.backArrow}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default Header;
