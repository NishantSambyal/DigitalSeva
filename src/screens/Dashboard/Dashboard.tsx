import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import {
  cv,
  id,
  invoice,
  pan,
  papers,
  pdf,
  script,
  smartphone,
  stamp,
  ticket,
} from 'src/assets/images';
import { BaseScreen, TextView } from 'src/components';
import { useStyles } from 'src/theme';
import style from './styles';

const Dashboard = () => {
  const styles = useStyles(style);
  const navigation = useNavigation();
  return (
    <BaseScreen title="Dashboard" disableBack navigationEnabled>
      <View style={styles.mainContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.categoryView}>
            <TextView style={styles.titleText}>Category Documents</TextView>
          </View>
          <View style={styles.flexRow}>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => navigation.navigate('UploadDocument')}>
              <Image source={pdf} style={styles.icon} resizeMode="contain" />
              <TextView style={styles.iconText}>{'Pdf\nPrint'}</TextView>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconContainer}>
              <Image source={stamp} style={styles.icon} resizeMode="contain" />
              <TextView style={styles.iconText}>Legal Document Print</TextView>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
              <Image source={cv} style={styles.icon} resizeMode="contain" />
              <TextView style={styles.iconText}>
                {'CV + Resume\nPrint'}
              </TextView>
            </TouchableOpacity>
          </View>
          <View style={styles.flexRow}>
            <TouchableOpacity style={styles.iconContainer}>
              <Image source={script} style={styles.icon} resizeMode="contain" />
              <TextView style={styles.iconText}>Script Printing</TextView>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
              <Image
                source={invoice}
                style={styles.icon}
                resizeMode="contain"
              />
              <TextView style={styles.iconText}>
                Bill and invoice print
              </TextView>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
              <Image source={papers} style={styles.icon} resizeMode="contain" />
              <TextView style={styles.iconText}>A4 printing</TextView>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.onlineServiceView}>
            <TextView style={styles.titleText}>Online Services</TextView>
          </View>
          <View style={styles.flexRow}>
            <TouchableOpacity style={styles.iconContainer}>
              <Image source={id} style={styles.icon} resizeMode="contain" />
              <TextView style={styles.iconText}>
                {'Aadhar\nCorrection'}
              </TextView>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
              <Image source={pan} style={styles.icon} resizeMode="contain" />
              <TextView style={styles.iconText}>PAN Card</TextView>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
              <Image source={ticket} style={styles.icon} resizeMode="contain" />
              <TextView style={styles.iconText}>Online railway ticket</TextView>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.aboutUs}>
            <TextView style={styles.titleText}>About Us</TextView>
          </View>
          <View style={styles.flexRow}>
            <TouchableOpacity style={styles.iconContainer}>
              <Image
                source={smartphone}
                style={styles.icon}
                resizeMode="contain"
              />
              <TextView style={styles.iconText}>{'Refer a Friend'}</TextView>
            </TouchableOpacity>
            <View style={styles.iconContainer} />
            <View style={styles.iconContainer} />
          </View>
        </View>
      </View>
    </BaseScreen>
  );
};

export default Dashboard;
