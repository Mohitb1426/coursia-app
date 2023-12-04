import { View, Text } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
// import DatePicker from 'react-native-date-picker';
// import moment from 'moment';
import styles from './style';
import { LocalizationContext } from '../../common/LocalizationProvider';
import { ComponentHeader } from '../../components';
import ProfilePicComponent from './ProfilePicComponent';
import FormTextInput from '../../components/FormTextInput';
// import { GenderToggleButton } from './GenderToggleButton';
import {
  getUserProfile,
  setProfileUpdated,
  // setProfileGender,
  // setProfileGender,
  updateProfile,
  updateUserProfile,
} from './actionUpdateProfile';
import FormCustomButton from '../../components/FormCustomButton';
import SvgIcon from '../../common/SvgIcon';
import CustomPicker from '../../components/CustomPicker';
import { getCityData, getStateData, setUserCityData } from '../OtpScreen/actionOtp';
import ErrorHandler from '../../common/ErrorHandler';
import Loader from '../../components/Loader';
import { setIsComingFromDrawer } from '../../routes/Drawer/actionDrawer';
import { clearDataOnBackButtonPress } from '../AskDoubtScreen/actionAskDoubt';
import constants from './constantsUpdateProfile';
import useThemedStyles from '../../hooks/useThemedStyles';

function EditProfile() {
  const Styles = useThemedStyles(styles);
  const userProfileState = useSelector((state) => state.reducerUpdateProfile);
  const stateCityData = useSelector((state) => state.reducerOtp);
  const { stateData, cityData } = stateCityData;
  const {
    customerData,
    // isProfileGenderSelected,
    isLoading,
  } = userProfileState;
  const {
    control, handleSubmit, watch, setValue,
  } = useForm({
    defaultValues: {
      firstname: customerData?.firstName,
      lastname: customerData?.lastName,
      address: customerData?.address1,
      city: customerData?.city,
      state: customerData?.state,
      email: customerData?.email,
      mobile: customerData?.mobile,
      pin: customerData?.pincode,
    },
  });
  const { translations } = useContext(LocalizationContext);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const askDoubtState = useSelector((state) => state.reducerAskDoubt);

  const { navigationFromAskDoubt } = askDoubtState;
  const commentQuizState = useSelector((state) => state.reducerQuizResultAnswer);
  const { fromQuizResults } = commentQuizState;
  // const [open, setOpen] = useState(false);
  const [isShowingStateList, setShowingStateList] = useState(false);
  const [isShowingCityList, setShowingCityList] = useState(false);

  const state = watch('state');

  const navigateBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  useEffect(() => {
    getStateData();
  }, [customerData]);

  useEffect(() => {
    getCity(state);
    return () => {
      dispatch(setUserCityData([]));
    };
  }, [stateData, state]);

  useEffect(() => {
    return () => {
      dispatch(setIsComingFromDrawer(false));
      dispatch(setProfileUpdated(false));
      dispatch(clearDataOnBackButtonPress());
    };
  }, []);

  const getCity = async (value) => {
    if (value) {
      const getID = stateData?.find((item) => item.value === value);
      const idObj = {};
      idObj.state_id = getID?.id;
      dispatch(getCityData(idObj));
    }
  };

  const onSelectCity = (cityValue) => {
    setValue('city', cityValue);
    setShowingCityList(false);
  };

  const onSelectState = (stateValue) => {
    setValue('state', stateValue);
    setValue('city', '');
    setShowingStateList(false);
  };

  const onSubmitPressed = (data) => {
    const cData = {
      firstName: data?.firstname.trim(),
      lastName: data?.lastname.trim(),
      address1: data?.address.trim(),
      address2: ' ',
      state: data?.state.trim(),
      city: data?.city.trim(),
      pincode: data?.pin.trim(),
      email: data?.email.trim(),
    };

    if (navigationFromAskDoubt || fromQuizResults) {
      dispatch(updateProfile({ cData, navigation }));
    } else {
      dispatch(updateUserProfile({ cData, navigation }));
    }
  };

  return (
    <ErrorHandler componentName="EditProfile">
      <View style={Styles.mainContainer}>
        <ComponentHeader
          goBack={() => {
            navigateBack();
          }}
          headerText={translations.UPDATE_PROFILE}
        />
        <KeyboardAwareScrollView
          nestedScrollEnabled
          contentInsetAdjustmentBehavior="automatic"
          keyboardShouldPersistTaps="handled"
          style={Styles.keyboardContainer}
        >
          <View style={Styles.innerContainer}>
            <ProfilePicComponent />

            <View style={Styles.formContainer}>
              <Text style={Styles.infoHeading}>{translations.UP_TEXT_YOUR_INFORMATION}</Text>

              <FormTextInput
                name="firstname"
                control={control}
                topText={translations.UP_TEXT_FIRSTNAME}
                placeholder={translations.UP_TEXT_FIRSTNAME}
                rules={{
                  required: translations.UP_TEXT_FIRSTNAME_REQ,
                  pattern: {
                    value: constants.REGEX.NAME_REGEX,
                    message: translations.UP_TEXT_NAME_INVALID,
                  },
                }}
                maxLength={150}
              />

              {/* <FormTextInput
                control={control}
                topText={translations.UP_TEXT_MIDDLENAME}
                placeholder={translations.UP_TEXT_MIDDLENAME}
                rules={{}}
              /> */}

              <FormTextInput
                control={control}
                name="lastname"
                topText={translations.UP_TEXT_LASTNAME}
                placeholder={translations.UP_TEXT_LASTNAME}
                rules={{
                  required: translations.UP_TEXT_LASTNAME_REQ,
                  pattern: {
                    value: constants.REGEX.NAME_REGEX,
                    message: translations.UP_TEXT_NAME_INVALID,
                  },
                }}
                maxLength={100}
              />

              <FormTextInput
                control={control}
                name="mobile"
                editable={false}
                preText="+91"
                topText={translations.UP_TEXT_MOBILE_NUMBER}
                placeholder={translations.UP_TEXT_MOBILE_NUMBER}
                rules={{
                  required: translations.UP_TEXT_MOBILE_NUM_REQ,
                  minLength: {
                    value: 10,
                    message: translations.UP_TEXT_MOBILE_NUM_DIGITS,
                  },
                  maxLength: {
                    value: 10,
                    message: translations.UP_TEXT_MOBILE_NUM_DIGITS,
                  },
                }}
                maxLength={10}
              />

              <FormTextInput
                name="email"
                control={control}
                maxLength={80}
                topText={translations.UP_TEXT_EMAIL}
                placeholder={translations.UP_TEXT_EMAIL}
                rules={{
                  required: translations.UP_TEXT_EMAIL_REQ,
                  pattern: {
                    value: constants.REGEX.EMAIL,
                    message: translations.UP_TEXT_EMAIL_INVALID,
                  },
                }}
              />

              {/* <FormTextInput
                control={control}
                name="dob"
                topText={translations.UP_TEXT_DOB}
                placeholder={translations.UP_TEXT_DOB}
                icon={<SvgIcon.CalendarProfile />}
                editable={false}
                onItemClick={() => setOpen(true)}
                rules={{
                  required: translations.UP_TEXT_DOB_REQ,
                }}
              /> */}

              {/* <Text style={Styles.topTextStyle}>{translations.UP_TEXT_GENDER}</Text>
              <GenderToggleButton
                isActive={isProfileGenderSelected}
                toggleState={() => {
                  dispatch(setProfileGender(!isProfileGenderSelected));
                }}
              /> */}

              <Text style={Styles.infoHeading}>{translations.UP_TEXT_ADDRESS}</Text>
              <FormTextInput
                control={control}
                multiline
                name="address"
                topText={translations.UP_TEXT_ADDRESS_WITH_ASTERISK}
                placeholder={translations.UP_TEXT_ADDRESS_WITH_ASTERISK}
                rules={{
                  required: translations.UP_TEXT_ADDRESS_REQ,
                }}
                maxLength={100}
              />

              <FormTextInput
                control={control}
                name="state"
                topText={translations.UP_TEXT_STATE}
                placeholder={translations.UP_TEXT_STATE}
                icon={<SvgIcon.DropdownMenu />}
                onItemClick={() => {
                  setShowingStateList(true);
                }}
                editable={false}
                rules={{
                  required: translations.UP_TEXT_STATE_REQ,
                }}
              />

              <FormTextInput
                name="city"
                control={control}
                topText={translations.UP_TEXT_CITY}
                placeholder={translations.UP_TEXT_CITY}
                onItemClick={() => {
                  setShowingCityList(true);
                }}
                icon={<SvgIcon.DropdownMenu />}
                editable={false}
                rules={{
                  required: translations.UP_TEXT_CITY_REQ,
                }}
              />

              <FormTextInput
                control={control}
                name="pin"
                isNumeric
                topText={translations.UP_TEXT_PIN}
                placeholder={translations.UP_TEXT_PIN}
                rules={{
                  required: translations.UP_TEXT_PIN_REQ,
                  minLength: {
                    value: 6,
                    message: translations.UP_TEXT_PIN_VALID,
                  },
                  maxLength: {
                    value: 6,
                    message: translations.UP_TEXT_PIN_VALID,
                  },
                  pattern: {
                    value: constants.REGEX.PINCODE,
                    message: translations.UP_TEXT_PIN_VALID,
                  },
                }}
              />

              <FormCustomButton
                text={translations.UP_TEXT_UPDATE}
                onPress={handleSubmit(onSubmitPressed)}
                type="PRIMARY"
              />

            </View>
          </View>
        </KeyboardAwareScrollView>
        {isShowingStateList && (
          <CustomPicker
            data={stateData}
            title="Select State"
            isActive={isShowingStateList}
            onItemPress={onSelectState}
            onClose={() => setShowingStateList(false)}
            isShowingCityList={isShowingCityList}
          />
        )}
        {isShowingCityList && (
          <CustomPicker
            data={cityData}
            title="Select City"
            onItemPress={onSelectCity}
            isActive={isShowingCityList}
            onClose={() => setShowingCityList(false)}
            isShowingCityList={isShowingCityList}
          />
        )}
        {/* <DatePicker
          modal
          open={open}
          mode="date"
          maximumDate={new Date()}
          date={new Date()}
          onConfirm={(datee) => {
            setOpen(false);
            setValue('dob', moment(datee).format('MM/DD/YYYY'));
          }}
          onCancel={() => {
            setOpen(false);
          }}
        /> */}
        <Loader show={isLoading} />
      </View>
    </ErrorHandler>
  );
}

export default EditProfile;
