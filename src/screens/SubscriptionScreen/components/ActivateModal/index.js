import {
  View, Text, Modal, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styles from './style';
import Images from '../../../../common/Images';
import ErrorHandler from '../../../../common/ErrorHandler';
import { LocalizationContext } from '../../../../common/LocalizationProvider';

function ActivateModal({ show, activatePlan, closeModal }) {
  const TAG = 'ActivateModal';
  const { translations } = useContext(LocalizationContext);

  return (
    <Modal
      visible={show}
      animationType="slide"
      transparent
    >
      <View style={styles.centeredView} activeOpacity={1}>
        <TouchableWithoutFeedback>
          <View style={styles.modalView}>
            <Image
              source={Images.ERROR_ICON}
            />
            <Text style={styles.activateText}>{translations.CONFIRM_REQUEST}</Text>
            <ErrorHandler componentName={`${TAG}':Button'`}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={closeModal}
                  style={[styles.button, styles.noTextButtonStyle]}
                >
                  <Text style={[styles.btnText, styles.noTextStyle]}>
                    {translations.CAMEL_CASE_NO}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={activatePlan} style={styles.button}>
                  <Text style={styles.btnText}>{translations.CAMEL_CASE_YES}</Text>
                </TouchableOpacity>
              </View>
            </ErrorHandler>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
}

ActivateModal.propTypes = {
  show: PropTypes.bool,
  activatePlan: PropTypes.func,
  closeModal: PropTypes.func,
};

export default ActivateModal;
