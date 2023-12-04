import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext, useMemo } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import propTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import styles from './styles';
import { Routes } from '../../../../routes/Routes';
import {
  GRADIENT_DATA,
} from '../../constant';
import SvgIcons from '../../../../common/SvgIcon';
import { openActivateModal, setAmount, setPlanId } from '../../actionSubscription';
import { formatDate } from '../../../../utilities/commonFunction/fornatDate';

function SubscriptionPlanButton({
  plan_name, expiry_days, strike_amount, actual_amount, is_purchased,
  user_subscription_plan_id, is_active_plan, plan_start_date, plan_expiry_date, is_expired,
  plan_group_id, is_recommended,
}) {
  const dispatch = useDispatch();
  const { translations } = useContext(LocalizationContext);
  const navigation = useNavigation();

  const navigateTo = () => {
    dispatch(setAmount(Number(actual_amount).toFixed(0)));
    navigation.navigate(Routes.SCREEN_BUY_SUBSCRIPTION_PASS, {
      plan_id: plan_group_id,
    });
  };

  const showModal = () => {
    dispatch(setPlanId(user_subscription_plan_id));
    dispatch(openActivateModal(true));
  };

  const showDate = (showStart = false) => {
    const [startDate] = plan_start_date.split(' ');
    const [expiryDate] = plan_expiry_date.split(' ');
    if (showStart) {
      return (
        <Text style={styles.startTextStyle}>{`${translations.START_DATE} : ${formatDate(startDate)}`}</Text>
      );
    }
    return (
      <Text style={styles.expireTextStyle}>{`${translations.EXPIRY_DATE} : ${formatDate(expiryDate)}`}</Text>
    );
  };

  const perDayAmount = useMemo(() => {
    const amount = Number(actual_amount) / Number(expiry_days);
    return amount.toFixed(0);
  }, []);
  return (
    <TouchableOpacity
      style={styles.mainButtonStyle}
      onPress={is_purchased ? () => {} : navigateTo}
      activeOpacity={1}
    >
      <LinearGradient
          // eslint-disable-next-line max-len
        colors={GRADIENT_DATA[plan_group_id]}
        style={is_purchased ? styles.includeWhiteBorder : styles.linearGradient}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <View style={is_active_plan ? styles.newContainer : styles.mainContainer}>
          <View style={styles.perDayStyle}>
            <Text style={styles.passTitle}>
              {plan_name}
            </Text>
            <View style={styles.validityContainer}>
              <Text style={styles.validText}>{translations.VALID_FOR}</Text>
              <Text style={styles.daysText}>
                {expiry_days}
                {' '}
                {translations.DAYS}
              </Text>
            </View>

          </View>
          <View style={styles.priceButton}>
            <View style={styles.priceContainer}>
              <Text style={styles.originalPriceText}>
                {'\u20B9'}
                {strike_amount}
                {' '}
              </Text>
              <Text style={styles.currentPriceText}>
                {' '}
                {'\u20B9'}
                {actual_amount}
              </Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.perDayPriceText}>
                {'\u20B9'}
                {`${perDayAmount}`}
              </Text>
              <Text style={styles.perDayText}>
                {' '}
                {`${translations.PER_DAY}`}
              </Text>

            </View>
            <View />

          </View>
        </View>
      </LinearGradient>
      {(is_purchased && !is_active_plan) && (
      <View style={styles.inActiveButton}>
        <TouchableOpacity onPress={showModal} style={styles.activateButtonStyle}>
          <View style={styles.subContainer}>
            <Text style={styles.activateButtonTextStyle}>
              {translations.ACTIVATE_YOUR_PASS}
            </Text>
            <SvgIcons.Activate />
          </View>
        </TouchableOpacity>
      </View>
      )}
      {is_active_plan && (
        <View style={styles.planCardButton}>
          <View style={styles.passRenewInfoSubContainer}>
            {is_expired ? (
              <>
                <Text style={styles.planExpiredTextStyle}>{translations.PASS_EXPIRED}</Text>
                <TouchableOpacity onPress={navigateTo}>
                  <Text style={styles.renewNowTextStyle}>{translations.RENEWED_NOW}</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                {showDate(true)}
                {showDate()}
              </>
            )}
          </View>
        </View>
      )}
      { is_recommended && (
        <View style={styles.recommendedIconStyle}>
          <SvgIcons.RecommendedIcon />
        </View>
      )}
    </TouchableOpacity>

  );
}

SubscriptionPlanButton.propTypes = {
  plan_name: propTypes.string,
  expiry_days: propTypes.string,
  strike_amount: propTypes.string,
  actual_amount: propTypes.string,
  plan_group_id: propTypes.string,
  is_purchased: propTypes.bool,
  is_expired: propTypes.bool,
  is_active_plan: propTypes.bool,
  is_recommended: propTypes.bool,
  user_subscription_plan_id: propTypes.number,
  plan_start_date: propTypes.any,
  plan_expiry_date: propTypes.any,
};

export default SubscriptionPlanButton;
