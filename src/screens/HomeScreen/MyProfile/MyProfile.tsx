import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
  Image,
  Share,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Dropdown } from 'react-native-element-dropdown';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-unresolved
import { ProfileReducer } from 'src/store/actions/Profile/types';
import { BaseScreen, Button, Icon, TextView } from 'src/components';
import Constants from 'src/constant';
import { LoginData } from 'src/screens/AuthScreens/Login/TsObject/LoginResponse';
import { ProfileActions } from 'src/store/actions/Profile/profile.actions';
import { RootState } from 'src/store/reducers';
import { useStyles } from 'src/theme';
import style from './styles';

const MyProfile = () => {
  const dispatch = useDispatch();
  const [isEditMode, setEditedMode] = useState(false);
  const profileReducer: ProfileReducer = useSelector(
    (state: RootState) => state.profileReducer,
  );

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [dob, setDob] = useState<Date>();
  const [picker, togglePicker] = useState(false);
  const [address, setAddress] = useState<string>('');
  const [state, setState] = useState<number>();
  const [city, setCity] = useState<number>();
  const [pin, setPin] = useState<string>('');
  const [promoCode, setPromo] = useState<string>('');
  const styles = useStyles(style);

  const loginData: LoginData = useSelector(
    (store: RootState) => store.loginReducer?.loginData,
  );
  useEffect(() => {
    dispatch(ProfileActions.getMyProfile(loginData.data.user_info.id));
    dispatch(ProfileActions.getStates());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(ProfileActions.getCity(state));
  }, [state, dispatch]);

  useEffect(() => {
    const profileData = profileReducer?.myProfile?.data;
    setName(profileData?.user_info?.name);
    setEmail(profileData?.user_info?.email);
    setPhone(profileData?.user_info?.phone);
    setGender(profileData?.user_info?.gender);
    setDob(
      profileData?.user_info?.dob
        ? moment(profileData?.user_info?.dob, 'DD-MM-YYYY').toDate()
        : new Date(),
    );
    setAddress(profileData?.address?.address);
    setState(profileData?.address?.state_id);
    setCity(profileData?.address?.city_id);
    setPin(profileData?.address?.pincode);
    setPromo(profileData?.user_info?.promo_code);
  }, [profileReducer?.myProfile?.data]);

  const updateProfile = () => {
    const payload = new FormData();
    payload.append('name', name);
    payload.append('gender', gender);
    payload.append('phone', phone);
    payload.append('date_of_birth', moment(dob).format('DD-MM-YYYY'));
    payload.append('address_name', address);
    payload.append('address', address);
    payload.append('state_id', state);
    payload.append('city_id', city);
    payload.append('pincode', pin);
    payload.append('status', 1);
    dispatch(
      ProfileActions.updateProfile(loginData.data.user_info.id, payload),
    );
  };

  const sendInvite = async () => {
    try {
      const result = await Share.share({
        message: Constants.Constants.SHARE_APP,
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
    <BaseScreen
      title="My Profile"
      right={!isEditMode ? 'Edit' : 'Cancel'}
      rightHandler={() => setEditedMode(!isEditMode)}>
      <View style={styles.mainContainer}>
        <Image
          style={styles.profileImg}
          source={{
            uri: profileReducer.myProfile?.data?.user_info?.image
              ? profileReducer.myProfile?.data?.user_info?.image
              : Constants.Constants.EMOJI_PLACEHOLDER,
          }}
        />
        <View style={styles.marginTop}>
          <TextView style={styles.title}>Name</TextView>
          {isEditMode ? (
            <TextInput
              onChangeText={setName}
              style={styles.editDescription}
              value={name}
            />
          ) : (
            <TextView style={styles.description}>{name}</TextView>
          )}

          <TextView style={styles.title}>Email</TextView>
          {isEditMode ? (
            <TextInput
              onChangeText={setEmail}
              style={styles.editDescription}
              value={email}
            />
          ) : (
            <TextView style={styles.description}>{email}</TextView>
          )}

          <TextView style={styles.title}>Phone</TextView>
          {isEditMode ? (
            <TextInput
              onChangeText={setPhone}
              style={styles.editDescription}
              value={phone}
            />
          ) : (
            <TextView style={styles.description}>{phone}</TextView>
          )}

          <TextView style={styles.title}>Gender</TextView>
          {isEditMode ? (
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={Constants.Arrays.GENDERS}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select Gender"
              value={gender}
              onChange={item => {
                setGender(item.label);
              }}
            />
          ) : (
            <TextView style={styles.description}>{gender}</TextView>
          )}

          <TextView style={styles.title}>Date Of Birth</TextView>
          <TouchableWithoutFeedback
            disabled={!isEditMode}
            onPress={() => togglePicker(true)}>
            <TextView
              style={isEditMode ? styles.editDescription : styles.description}>
              {moment(dob, 'DD-MM-YYYY').format('Do') +
                ' ' +
                moment(dob).format('MMM YYYY')}
            </TextView>
          </TouchableWithoutFeedback>

          <TextView style={styles.title}>Address</TextView>
          {isEditMode ? (
            <TextInput
              onChangeText={setAddress}
              style={styles.editDescription}
              value={address}
            />
          ) : (
            <TextView style={styles.description}>{address}</TextView>
          )}

          <TextView style={styles.title}>State</TextView>
          {isEditMode ? (
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={profileReducer.getStates?.data}
              maxHeight={300}
              labelField="name"
              valueField="id"
              placeholder="Select State"
              value={state}
              onChange={item => {
                setState(item.id);
              }}
            />
          ) : (
            <TextView style={styles.description}>{state}</TextView>
          )}

          <TextView style={styles.title}>City</TextView>
          {isEditMode ? (
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={profileReducer.getCity?.data}
              maxHeight={300}
              labelField="name"
              valueField="id"
              placeholder="Select City"
              value={state}
              onChange={item => {
                setCity(item.id);
              }}
            />
          ) : (
            <TextView style={styles.description}>{city}</TextView>
          )}

          <TextView style={styles.title}>Pincode</TextView>

          {isEditMode ? (
            <TextInput
              onChangeText={setPin}
              style={styles.editDescription}
              value={pin}
              keyboardType={'number-pad'}
              maxLength={6}
            />
          ) : (
            <TextView style={styles.description}>{pin}</TextView>
          )}
          <View style={styles.flexRow}>
            <View style={styles.flex1}>
              <TextView style={styles.title}>Promo Code</TextView>
              <TextView style={styles.description}>{promoCode}</TextView>
            </View>
            <TouchableOpacity style={styles.alignSelf} onPress={sendInvite}>
              <Icon
                name={'share'}
                family={'feather'}
                style={styles.shareIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        {isEditMode && (
          <Button
            buttonStyle={styles.submitButton}
            text="Submit"
            onClick={updateProfile}
          />
        )}
        <DatePicker
          modal
          open={picker}
          date={dob ? dob : new Date()}
          mode={'date'}
          maximumDate={new Date()}
          onConfirm={date => {
            togglePicker(false);
            setDob(date);
          }}
          onCancel={() => {
            togglePicker(false);
          }}
        />
      </View>
    </BaseScreen>
  );
};

export default MyProfile;
