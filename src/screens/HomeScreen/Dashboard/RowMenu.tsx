import React from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import type { Product } from 'src/store/actions/Dashboard/menu';
import { TextView } from 'src/components';
import useMyNavigation from 'src/helpers/useNavigation';
import { useStyles } from 'src/theme';
import style from './styles';
import { RowMenuProps } from './types';

const RowMenu: React.FC<RowMenuProps> = ({ obj }) => {
  const styles = useStyles(style);
  const navigation = useMyNavigation();

  const rowItem = (item: Product) => {
    return (
      <>
        <View style={styles.tileView}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() =>
              navigation.navigate('UploadDocument', {
                productID: item.product_id,
              })
            }>
            <Image
              source={{ uri: item.icon }}
              style={styles.icon}
              resizeMode="contain"
            />
            <TextView style={styles.iconText}>{item.product_name}</TextView>
          </TouchableOpacity>

          {/* <TouchableOpacity style={styles.iconContainer}>
            <Image source={stamp} style={styles.icon} resizeMode="contain" />
            <TextView style={styles.iconText}>Legal Document Print</TextView>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={cv} style={styles.icon} resizeMode="contain" />
            <TextView style={styles.iconText}>{'CV + Resume\nPrint'}</TextView>
          </TouchableOpacity> */}
        </View>
        {/* <View style={styles.flexRow}>
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={script} style={styles.icon} resizeMode="contain" />
            <TextView style={styles.iconText}>Script Printing</TextView>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={invoice} style={styles.icon} resizeMode="contain" />
            <TextView style={styles.iconText}>Bill and invoice print</TextView>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={papers} style={styles.icon} resizeMode="contain" />
            <TextView style={styles.iconText}>A4 printing</TextView>
          </TouchableOpacity>
        </View> */}
      </>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.categoryView}>
          <TextView style={styles.titleText}>{obj.name}</TextView>
        </View>
        <FlatList
          contentContainerStyle={styles.flatListContentContainer}
          data={obj.products}
          horizontal={true}
          numColumns={1}
          renderItem={objItem => rowItem(objItem.item)}
          keyExtractor={item => item.product_id.toString()}
        />
      </View>
    </View>
  );
};

export default RowMenu;
