import React, { useEffect } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { FlatListSlider } from 'react-native-flatlist-slider';
import { useDispatch, useSelector } from 'react-redux';
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
import useMyNavigation from 'src/helpers/useNavigation';
import { DashboardActions } from 'src/store/actions/dashboard.actions';
import { RootState } from 'src/store/reducers';
import { useStyles } from 'src/theme';
import style from './styles';
import { SliderType } from './types';

const Dashboard = () => {
  const styles = useStyles(style);
  const dispatch = useDispatch();
  const navigation = useMyNavigation();

  const dashboardReducer: SliderType = useSelector(
    (state: RootState) => state.dashboardReducer?.sliderData?.data,
  );

  useEffect(() => {
    dispatch(DashboardActions.callSliderApi());
  }, [dispatch]);

  return (
    <BaseScreen title="Dashboard" disableBack navigationEnabled>
      <View>
        {dashboardReducer && (
          <FlatListSlider
            data={dashboardReducer && dashboardReducer}
            timer={3000}
            imageKey={'image'}
            local={false}
            separator={0}
            height={200}
            loop={true}
            autoscroll={true}
            // currentIndexCallback={index => console.log('Index', index)}
            onPress={item => console.info(item)}
            indicator
            animation
          />
        )}

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
                <Image
                  source={stamp}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <TextView style={styles.iconText}>
                  Legal Document Print
                </TextView>
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
                <Image
                  source={script}
                  style={styles.icon}
                  resizeMode="contain"
                />
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
                <Image
                  source={papers}
                  style={styles.icon}
                  resizeMode="contain"
                />
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
                <Image
                  source={ticket}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <TextView style={styles.iconText}>
                  Online railway ticket
                </TextView>
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
      </View>
    </BaseScreen>
  );
};

export default Dashboard;
