import React, { useContext } from 'react';
import {
  Modal, View, Image, Text,
} from 'react-native';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import Images from '../../../../common/Images';
import styles from './style';
import useThemedStyles from '../../../../hooks/useThemedStyles';
// import Strings from '../../../utilities/Strings';

export function AskDoubtSuccessModal({
  isVisible,
}) {
  const Styles = useThemedStyles(styles);
  const updateProfileState = useSelector((state) => state.reducerUpdateProfile);
  const { customerData } = updateProfileState;
  const { firstName, lastName } = customerData;
  const { translations } = useContext(LocalizationContext);

  return (
    <Modal visible={isVisible} transparent>
      <View style={Styles.modalContent}>
        <View style={Styles.mainContainer}>
          <Image source={Images.DOUBT_POSTED} style={Styles.doubtPostedIcon} />
          <Text style={Styles.firstTextLineStyle}>
            {`${translations.HEY} ${firstName} ${lastName}`}
            ,
          </Text>
          <Text style={Styles.secondTextLineStyle}>{translations.DOUBT_POSTED}</Text>
          <Text style={Styles.thirdTextLineStyle}>
            {translations.ABOUT_NOTIFICATION_FIRST_TEXT}
          </Text>
          <Text style={Styles.fourthTextLineStyle}>
            {translations.ABOUT_NOTIFICATION_SECOND_TEXT}
          </Text>
        </View>
      </View>
    </Modal>
  );
}
AskDoubtSuccessModal.propTypes = {
  isVisible: propTypes.bool,
};
