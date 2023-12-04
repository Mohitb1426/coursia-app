import { View, RefreshControl, ScrollView } from 'react-native';
import React, { useCallback, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import PropTypes from 'prop-types';
import styles from './styles';
import { LocalizationContext } from '../../common/LocalizationProvider';
import SubscriptionPlanButton from './components/SubscriptionPlanButton';
import {
  activateSubscriptionPass,
  getSubscription,
  setListLoading,
  openActivateModal,
  setSubscription,
} from './actionSubscription';
import Loader from '../../components/Loader';
import ActivateModal from './components/ActivateModal';
import { ComponentHeader } from '../../components';
import ErrorHandler from '../../common/ErrorHandler';
import SvgIcon from '../../common/SvgIcon';
import useThemedStyles from '../../hooks/useThemedStyles';

export function SubscriptionScreen({ navigation }) {
  const Styles = useThemedStyles(styles);
  const TAG = 'SubscriptionScreen';
  const dispatch = useDispatch();
  const { translations } = useContext(LocalizationContext);
  const subscriptionState = useSelector((state) => state.reducerSubscription);
  const {
    subscription, isLoader, openModal, isListLoading,
  } = subscriptionState;

  const activatePlan = () => {
    dispatch(activateSubscriptionPass());
    // dispatch(getSubscription());
  };

  const closeModal = () => {
    dispatch(openActivateModal(false));
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(getSubscription());
    }, []),
  );

  const onRefresh = React.useCallback(() => {
    dispatch(setListLoading(true));
    setTimeout(() => {
      dispatch(getSubscription());
    }, 2000);
  }, []);

  useEffect(() => {
    return () => {
      dispatch(setSubscription([]));
    };
  }, []);

  const renderData = () => {
    const data = subscription.map((item) => {
      return (
        <ErrorHandler componentName={`${TAG} : SubscriptionPlanButton`}>
          <SubscriptionPlanButton {...item} />
        </ErrorHandler>
      );
    });
    return data;
  };

  return (
    <ErrorHandler componentName={TAG}>
      <ErrorHandler componentName={`${TAG}: ComponentHeader`}>
        <ComponentHeader
          goBack={() => navigation.goBack()}
          headerText={translations.BACK}
          customStyle={Styles.headerStyle}
        />
      </ErrorHandler>
      <ScrollView
        style={Styles.container}
        refreshControl={
          <RefreshControl refreshing={isListLoading} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      >
        <>
          <View style={Styles.mainContainer}>
            {renderData()}
            <ErrorHandler componentName={`${TAG} : ActivateModal`}>
              <ActivateModal
                show={openModal}
                activatePlan={activatePlan}
                closeModal={closeModal}
              />
            </ErrorHandler>
            <Loader show={isLoader} />
          </View>
          {!isLoader && (
            <View style={Styles.svgContainer}>
              <SvgIcon.StudentSubscriptionIcon />
            </View>
          )}
        </>
      </ScrollView>
    </ErrorHandler>
  );
}

SubscriptionScreen.propTypes = {
  navigation: PropTypes.any,
};
