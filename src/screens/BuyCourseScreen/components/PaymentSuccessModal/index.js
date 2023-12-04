import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Sound from 'react-native-sound';
import styles from './styles';
import Images from '../../../../common/Images';
import { CustomModal } from '../../../../components';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import { debugLog } from '../../../../common/Logger';

function PaymentSuccessModal({
  isVisible, onPressClose, modalType, msgToneURL,
}) {
  const { translations } = useContext(LocalizationContext);

  useEffect(() => {
    if (modalType === 'SUCCESS') {
      const sound1 = new Sound(
        msgToneURL,
        '',
        (error) => {
          if (error) {
            debugLog(`error${error.message}`);
            return;
          }
          sound1.play(() => {
            sound1.release();
          });
        },
      );
    }
  }, [isVisible]);
  return (
    <CustomModal
      visible={isVisible}
      alignBottom={false}
      modalStyle={styles.modalCustomStyle}
      borderTopRightRadius={5}
      borderTopLeftRadius={5}
      borderBottomLeftRadius={5}
      borderBottomRightRadius={5}
      modalHeight={301}
    >
      <View
        style={styles.mainImageContainer}
      >
        <View style={styles.subContainer}>
          <TouchableOpacity onPress={onPressClose}>
            <Image
              style={styles.imageCloseContainer}
              source={Images.CLOSE_ICON}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View
          style={styles.imageSuccessContainer}
        >
          <Image source={modalType === 'SUCCESS' ? Images.VER_SUCCESS_ICON : Images.VER_FAIL_ICON} />
          <View
            style={styles.successTextContainer}
          >
            <Text
              style={modalType === 'SUCCESS' ? styles.successTextStyle : styles.textPaymentFail}
            >
              {modalType === 'SUCCESS' ? translations.SUCCESS : translations.FAILED}
            </Text>
            { modalType === 'SUCCESS' ? (
              <View
                style={styles.cardContainer}
              >
                <Text
                  style={styles.cardText}
                >
                  {translations.THANK_MSG}
                </Text>
              </View>
            )
              : (
                <View style={styles.successTextContainer}>
                  <Text
                    style={styles.cardText}
                  >
                    {translations.FAIL_MSG}
                  </Text>
                  <Text
                    style={styles.cardText}
                  >
                    {translations.TRY_AGAIN}
                  </Text>
                  <Text
                    style={styles.cardText}
                  >
                    {translations.LOW_FUND}
                  </Text>
                </View>
              )}
          </View>
        </View>
      </View>
    </CustomModal>
  );
}

PaymentSuccessModal.propTypes = {
  isVisible: PropTypes.bool,
  onPressClose: PropTypes.func,
  modalType: PropTypes.string,
  msgToneURL: PropTypes.string,
};

export default PaymentSuccessModal;
