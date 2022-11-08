import React, { useEffect } from 'react';
import { Image, Share, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import type { ReferAndEarnType } from 'src/store/actions/Dashboard/referAndEarn';
import { referEarnImg } from 'src/assets/images';
import { BaseScreen, Button, TextView } from 'src/components';
import Constants from 'src/constant';
import { LoginData } from 'src/screens/AuthScreens/Login/TsObject/LoginResponse';
import { DashboardActions } from 'src/store/actions/Dashboard/dashboard.actions';
import { RootState } from 'src/store/reducers';
import { useStyles } from 'src/theme';
import style from './styles';

const ReferAndEarn = () => {
  const styles = useStyles(style);
  const dispatch = useDispatch();

  const loginData: LoginData = useSelector(
    (store: RootState) => store.loginReducer?.loginData,
  );

  const referAndEarn: ReferAndEarnType = useSelector(
    (store: RootState) => store.dashboardReducer?.referAndEarn,
  );

  useEffect(() => {
    const formData = new FormData();
    formData.append('id', loginData.data?.user_info?.id);
    dispatch(DashboardActions.referAndEarn(formData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendInvite = async () => {
    try {
      const result = await Share.share({
        message:
          Constants.Constants.SHARE_APP +
          referAndEarn.data?.share_earn_data?.promo_code,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      }
    } catch (error) {}
  };

  return (
    <BaseScreen title="Refer and earn">
      <View style={styles.mainContainer}>
        <Image source={referEarnImg} style={styles.referEarn} />
        <TextView style={styles.referTitle}>
          {`Refer now & earn upto Rs ${referAndEarn.data?.share_earn_data?.referrer_value}`}
        </TextView>
        <TextView style={styles.referDesc}>
          Send a referral link to your friends via SMS / Email / Whatsapp
        </TextView>

        <TextView
          style={
            styles.referQues
          }>{`Earned Referred Amount Rs ${referAndEarn.data?.share_earn_data?.referred_value}`}</TextView>

        <TextView style={styles.referCodeTxt}>REFERRAL CODE</TextView>
        <TextView style={styles.referCode}>
          {referAndEarn.data?.share_earn_data?.promo_code}
        </TextView>

        <Button
          onClick={sendInvite}
          buttonStyle={styles.referButton}
          text="REFER NOW"
        />
      </View>
    </BaseScreen>
  );
};

export default ReferAndEarn;
