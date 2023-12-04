import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style';
import SvgIcons from '../../common/SvgIcon';
import CustomButton from '../../components/CustomButton';
import { ColorTheme } from '../../common/AppStyles';
import { LocalizationContext } from '../../common/LocalizationProvider';
import { Routes } from '../../routes/Routes';
import { setShowPaymentSuccessfulScreen } from '../BuySubscriptionPassScreen/actionBuySubscription';
import useThemedStyles from '../../hooks/useThemedStyles';
import { playMsgTone } from '../../utilities/commonFunction/msgTone';
import { getDate } from '../../utilities/commonFunction/fornatDate';

export function PaymentSuccessfulScreen({ navigation, route }) {
  const Styles = useThemedStyles(styles);
  const dispatch = useDispatch();
  const { screenName } = route.params;
  const buySubscriptionState = useSelector((state) => state.reducerBuySubscription);
  const chooseCoursesState = useSelector((state) => state.reducerChooseCourses);
  const buyCourseState = useSelector((state) => state.reducerBuyCourse);
  const { courseTransactionId, msgToneLink } = buyCourseState;
  const { price } = chooseCoursesState;
  const subscriptionState = useSelector((state) => state.reducerSubscription);
  const { transactionId } = buySubscriptionState;
  const { translations } = useContext(LocalizationContext);
  const { passAmount } = subscriptionState;

  useEffect(() => {
    playMsgTone(msgToneLink);
  }, []);

  const onButtonPress = () => {
    dispatch(setShowPaymentSuccessfulScreen(false));
    if (screenName === Routes.SCREEN_BUY_COURSE) {
      navigation.navigate(Routes.SCREEN_MY_COURSES);
    } else {
      navigation.navigate(Routes.SCREEN_SUBSCRIPTION);
    }
  };

  const getTransactionId = () => {
    if (screenName === Routes.SCREEN_BUY_COURSE) {
      return courseTransactionId;
    }
    return transactionId;
  };

  const getAmount = () => {
    if (screenName === Routes.SCREEN_BUY_COURSE) {
      return price;
    }
    return passAmount;
  };

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.svgContainer}>
        <SvgIcons.PaymentSuccess />
      </View>
      <View style={Styles.subContainer}>
        <Text style={Styles.headingStyle}>{translations.PAYMENT_SUCCESSFUL}</Text>
        <View style={Styles.subHeadingContainer}>
          <Text style={Styles.subHeadingStyle}>{translations.PAYMENT_PROCESSED}</Text>
        </View>
        <Text style={Styles.transactionTextStyle}>{`${translations.TRANSACTION_NUMBER} : ${getTransactionId()}`}</Text>
        <View style={Styles.infoContainerStyle}>
          <View style={Styles.firstInfoContainerStyle}>
            <Text style={Styles.leftTextStyle}>{translations.TOTAL_AMOUNT_PAID}</Text>
            <Text style={Styles.rightTextStyle}>{getAmount()}</Text>
          </View>
          <View style={Styles.secondInfoContainerStyle}>
            <Text style={Styles.leftTextStyle}>{translations.TRANSACTION_DATE}</Text>
            <Text style={Styles.rightTextStyle}>{getDate()}</Text>
          </View>
        </View>
        <View style={Styles.buttonContainer}>
          <CustomButton
            onButtonPress={onButtonPress}
            buttonText={translations.VER_CONTINUE}
            textColor={ColorTheme.WHITE}
            buttonColor={ColorTheme.GREEN_BG}
            customStyle={Styles.buttonStyle}
          />
        </View>
      </View>
    </View>
  );
}

PaymentSuccessfulScreen.propTypes = {
  navigation: PropTypes.any,
  route: PropTypes.any,
};
