import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { FlatListSlider } from 'react-native-flatlist-slider';
import { useDispatch, useSelector } from 'react-redux';
import type { MenuType } from 'src/store/actions/Dashboard/menu';
import { BaseScreen } from 'src/components';
import { DashboardActions } from 'src/store/actions/Dashboard/dashboard.actions';
import { RootState } from 'src/store/reducers';
import { useStyles } from 'src/theme';
import RowMenu from './RowMenu';
import style from './styles';
import { SliderType } from './types';

const Dashboard = () => {
  const styles = useStyles(style);
  const dispatch = useDispatch();

  const sliderData: SliderType = useSelector(
    (state: RootState) => state.dashboardReducer?.sliderData?.data,
  );
  const menuData: MenuType = useSelector(
    (state: RootState) => state.dashboardReducer?.menu?.data,
  );

  useEffect(() => {
    dispatch(DashboardActions.callSliderApi());
    dispatch(DashboardActions.callMenuApi());
  }, [dispatch]);

  const viewSlider = () => {
    return (
      <FlatListSlider
        data={sliderData && sliderData}
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
    );
  };

  return (
    <BaseScreen title="Dashboard" disableBack navigationEnabled disableScroll>
      <View style={styles.flex}>
        {menuData?.data && (
          <View>
            <FlatList
              data={menuData.data}
              ListHeaderComponent={viewSlider}
              renderItem={obj => <RowMenu obj={obj.item} />}
              keyExtractor={item => item.category_id.toString()}
            />
          </View>
        )}
      </View>
    </BaseScreen>
  );
};

export default Dashboard;
