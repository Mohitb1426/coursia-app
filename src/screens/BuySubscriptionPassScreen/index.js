import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import RazorpayCheckout from 'react-native-razorpay';
import styles from './styles';
import { ColorTheme } from '../../common/AppStyles';
import Banner from './components/Banner';
import Highlights from './components/Highlights';
import { LocalizationContext } from '../../common/LocalizationProvider';
import ErrorHandler from '../../common/ErrorHandler';
import {
  closeModal,
  generateSubscriptionPaymentOrder,
  getSubscriptionPlanDetails,
  setDefaultPaymentLink,
  setLoading,
  setShowPaymentSuccessfulScreen,
  verifyPaymentAction,
} from './actionBuySubscription';
import Loader from '../../components/Loader';
import { Routes } from '../../routes/Routes';
import { PaymentSuccessModal } from '../BuyCourseScreen/components';
import { ComponentHeader } from '../../components';
import useThemedStyles from '../../hooks/useThemedStyles';

export function BuySubscriptionPassScreen({ navigation, route }) {
  const Styles = useThemedStyles(styles);
  const dispatch = useDispatch();
  const subscriptionDetailsState = useSelector((state) => state.reducerBuySubscription);
  const { plan_id } = route.params;
  const {
    subscriptionDetails, isLoader, razorPayData, showPaymentSuccessfulScreen,
    showCardPaymentFail, msgToneLink,
  } = subscriptionDetailsState;
  const { translations } = useContext(LocalizationContext);
  const TAG = 'SubscriptionPassScreen';
  useEffect(() => {
    dispatch(getSubscriptionPlanDetails(plan_id));
  }, []);

  const featureNames = subscriptionDetails[0]?.featurelist.map((item) => item.feature_name);
  const gradients = [
    [ColorTheme.SILVER_GRADIENT_1, ColorTheme.SILVER_GRADIENT_2],
    [ColorTheme.GOLD_GRADIENT_1, ColorTheme.GOLD_GRADIENT_2],
    [ColorTheme.PLATINUM_GRADIENT_1, ColorTheme.PLATINUM_GRADIENT_2],
  ];

  const navigateTo = () => {
    dispatch(generateSubscriptionPaymentOrder(plan_id));
  };

  useEffect(() => {
    if (razorPayData) {
      RazorpayCheckout.open(razorPayData).then((data) => {
        const newData = { ...data, plan_id: Number(plan_id) };
        dispatch(verifyPaymentAction(newData));
      }).catch(() => {
        dispatch(setDefaultPaymentLink());
      });
    }
  }, [razorPayData]);

  useEffect(() => {
    if (showPaymentSuccessfulScreen) {
      dispatch(setLoading(false));
      dispatch(setShowPaymentSuccessfulScreen(false));
      navigation.navigate(
        Routes.SCREEN_PAYMENT_SUCCESS,
        { screenName: Routes.SCREEN_PAYMENT_SUCCESS },
      );
    }
  }, [showPaymentSuccessfulScreen]);

  const closeModalCard = () => {
    dispatch(closeModal());
    return navigation.navigate(Routes.SCREEN_SUBSCRIPTION);
  };

  return (
    <ErrorHandler componentName={TAG}>
      <View style={Styles.mainContainer}>
        <ErrorHandler componentName={`${TAG}: ComponentHeader`}>
          <ComponentHeader
            goBack={() => navigation.goBack()}
            headerText={translations.BACK}
          />
        </ErrorHandler>
        <ErrorHandler componentName={`${TAG}: Banner`}>
          <Banner
            data={subscriptionDetails[0]}
            gradient={gradients[Number(plan_id) - 1]}
          />
        </ErrorHandler>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={Styles.secondaryContainer}
        >
          <Text style={Styles.highlightText}>{translations.PASS_HIGHLIGHTS}</Text>
          <ErrorHandler componentName={`${TAG}: Highlights`}>
            <Highlights title={translations.SUBSCRIPTION_RECORDED} />
          </ErrorHandler>
          {featureNames?.map((item) => {
            return (
              <ErrorHandler>
                <Highlights title={item} />
              </ErrorHandler>
            );
          })}
        </ScrollView>
        <TouchableOpacity
          disabled={showPaymentSuccessfulScreen}
          style={Styles.button}
          onPress={navigateTo}
        >
          <Text style={Styles.btnText}>{`${translations.BUY} ${subscriptionDetails[0]?.plan_name || ''}`}</Text>
        </TouchableOpacity>
        <Loader show={isLoader || showPaymentSuccessfulScreen} />
        {showCardPaymentFail && (
          <PaymentSuccessModal
            isVisible={showCardPaymentFail}
            onPressClose={() => closeModalCard()}
            modalType="FAILED"
            msgToneURL={msgToneLink}
          />
        )}
      </View>
    </ErrorHandler>
  );
}

BuySubscriptionPassScreen.propTypes = {
  route: propTypes.any,
  navigation: propTypes.any,
};
