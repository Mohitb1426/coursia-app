import React, {
  useState, useEffect, useContext,
} from 'react';
import {
  View,
  Text,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import RazorpayCheckout from 'react-native-razorpay';
import styles from './styles';
import Loader from '../../components/Loader';
import { LocalizationContext } from '../../common/LocalizationProvider';
import constants from './constantsBuyCourse';
import {
  addFreeCourse,
  closeModal,
  generatePaymentLinkForCourseUnit,
  getCourseUnitData,
  setDefaultPaymentLink,
  updateLoader,
  updateUserProfile, userProfileUpdated, verifyPaymentAction,
} from './actionBuyCourseScreen';
import { Routes } from '../../routes/Routes';
import { setIsComingFromDrawer } from '../../routes/Drawer/actionDrawer';
import { PaymentSuccessModal } from './components';
import ErrorHandler from '../../common/ErrorHandler';
import FormCustomButton from '../../components/FormCustomButton';
import { ComponentHeader } from '../../components';
import FormTextInput from '../../components/FormTextInput';
import { getCityData, getStateData, setUserCityData } from '../OtpScreen/actionOtp';
import SvgIcon from '../../common/SvgIcon';
import CustomPicker from '../../components/CustomPicker';

export function BuyCourseScreen() {
  const buyCourseState = useSelector((state) => state.reducerBuyCourse);
  const stateCityData = useSelector((state) => state.reducerOtp);
  const { translations } = useContext(LocalizationContext);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isShowingStateList, setShowingStateList] = useState(false);
  const [isShowingCityList, setShowingCityList] = useState(false);
  const introState = useSelector((state) => state.reducerIntro);
  const { previousRouteName } = introState;
  const drawerState = useSelector((state) => state.reducerDrawer);
  const { isComingFromDrawer } = drawerState;
  const chooseCourseData = useSelector((cState) => cState.reducerChooseCourses);
  const { courseUnitData } = chooseCourseData;
  const { stateData, cityData } = stateCityData;
  const {
    customerData,
    isSubmitActive,
    isLoading,
    msgToneLink,
    razorPayData,
    showCardPaymentSuccess,
    showCardPaymentFail,
    checkFormFilled,
  } = buyCourseState;

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
  const state = watch('state');

  const navigateBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    getStateData();
  }, [customerData]);

  useEffect(() => {
    getCity(state);
    return () => {
      dispatch(setUserCityData([]));
    };
  }, [stateData, state]);

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
    };
    dispatch(updateUserProfile(cData));
    if (isComingFromDrawer) {
      navigation.goBack();
    }
  };

  useEffect(() => {
    if (checkFormFilled) {
      submitData();
    }
    return () => {
      dispatch(setDefaultPaymentLink());
      dispatch(setIsComingFromDrawer(false));
      dispatch(userProfileUpdated(false));
    };
  }, []);

  useEffect(() => {
    if (razorPayData) {
      RazorpayCheckout.open(razorPayData).then((data) => {
        dispatch(verifyPaymentAction(data));
      }).catch(() => {
        dispatch(setDefaultPaymentLink());
        navigation.goBack();
      });
    }
  }, [razorPayData]);

  const submitData = async () => {
    if (previousRouteName === Routes.SCREEN_COURSE_UNIT) {
      return dispatch(generatePaymentLinkForCourseUnit());
    }
    if (constants.FREE.includes(courseUnitData[0]?.course_type_clp)) {
      return dispatch(addFreeCourse(navigation));
    }
    dispatch(getCourseUnitData());
    return null;
  };

  const closeModalCard = (success) => {
    dispatch(closeModal());
    return success ? navigation.navigate(Routes.SCREEN_MY_COURSES)
      : navigation.navigate(Routes.SCREEN_HOME);
  };

  useEffect(() => {
    if (isSubmitActive) {
      submitData();
    }
  }, [isSubmitActive]);

  useEffect(() => {
    if (showCardPaymentSuccess) {
      dispatch(updateLoader(false));
      dispatch(closeModal());
      navigation.navigate(Routes.SCREEN_PAYMENT_SUCCESS, { screenName: Routes.SCREEN_BUY_COURSE });
    }
  }, [showCardPaymentSuccess]);

  return (
    <ErrorHandler componentName="BuyCourseProfile">
      <View style={styles.mainContainer}>
        {!checkFormFilled && (
        <>
          <ComponentHeader
            goBack={() => {
              navigateBack();
            }}
            headerText={translations.ENTER_DETAILS}
          />
          <KeyboardAwareScrollView
            nestedScrollEnabled
            contentInsetAdjustmentBehavior="automatic"
            keyboardShouldPersistTaps="handled"
            style={styles.keyboardContainer}
          >
            <View style={styles.innerContainer}>

              <View style={styles.formContainer}>
                <Text style={styles.infoHeading}>{translations.UP_TEXT_YOUR_INFORMATION}</Text>

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

                <Text style={styles.infoHeading}>{translations.UP_TEXT_ADDRESS}</Text>
                <FormTextInput
                  control={control}
                  multiline
                  name="address"
                  topText={translations.UP_TEXT_ADDRESS}
                  placeholder={translations.UP_TEXT_ADDRESS}
                  rules={{
                    required: translations.UP_TEXT_ADDRESS_REQ,
                  }}
                  maxLength={150}
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
                  }}
                />

                <FormCustomButton
                  text={isComingFromDrawer ? translations.UP_TEXT_UPDATE : translations.PAYMENT}
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
          />
          )}
          {isShowingCityList && (
          <CustomPicker
            data={cityData}
            title="Select City"
            onItemPress={onSelectCity}
            isActive={isShowingCityList}
            onClose={() => setShowingCityList(false)}
          />
          )}
        </>
        )}
        {/* {showCardPaymentSuccess && (
          <PaymentSuccessModal
            isVisible={showCardPaymentSuccess}
            onPressClose={() => closeModalCard(true)}
            modalType="SUCCESS"
            msgToneURL={msgToneLink}
          />
        )} */}
        {showCardPaymentFail && (
          <PaymentSuccessModal
            isVisible={showCardPaymentFail}
            onPressClose={() => closeModalCard(false)}
            modalType="FAILED"
            msgToneURL={msgToneLink}
          />
        )}

        <Loader show={isLoading} />
      </View>
    </ErrorHandler>
  );
}
