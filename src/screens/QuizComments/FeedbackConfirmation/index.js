import {
  View, Text, Image,
} from 'react-native';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import styles from './style';
import { LocalizationContext } from '../../../common/LocalizationProvider';
import Images from '../../../common/Images';
import useThemedStyles from '../../../hooks/useThemedStyles';

function FeedbackConfirmation() {
  const Styles = useThemedStyles(styles);
  const { translations } = useContext(LocalizationContext);
  const profileState = useSelector((state) => state.reducerUpdateProfile);
  const { customerData } = profileState;
  const customerName = `${translations.HEY} ${customerData?.firstName} ${customerData?.lastName},`;
  return (
    <View style={Styles.containerStyle}>
      <Image source={Images.CONFIRMATION_TICK} style={Styles.confirmationImageStyle} />
      <Text style={Styles.textStyle1}>{customerName}</Text>
      <Text style={Styles.textStyle2}>
        {translations.YOUR_DOUBT_IS_POSTED}
        {' '}
      </Text>
      <Text style={Styles.textStyle3}>{translations.WE_WILL_SEND_NOTIFICATION}</Text>
    </View>
  );
}

export default FeedbackConfirmation;
