import {
  View, Text, Modal, Image,
} from 'react-native';
import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import styles from './style';
import Images from '../../../../common/Images';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import CustomButton from '../../../../components/CustomButton';
import { ColorTheme } from '../../../../common/AppStyles';
import { isPopUpBoxOpen } from '../../actionQuizByCategory';

export function PleaseWaitModal({ visible, showText = false }) {
  const { translations } = useContext(LocalizationContext);
  const dispatch = useDispatch();
  const renderText = () => {
    return showText ? (
      <>
        <Text style={styles.selectText}>{translations.SELECT_AT_LEAST_ONE_MESSAGE}</Text>
        <View style={styles.buttonContainer}>
          <CustomButton
            onButtonPress={() => dispatch(isPopUpBoxOpen(false))}
            buttonText="OK"
            buttonColor={ColorTheme.GREEN_BG}
            textColor={ColorTheme.WHITE}
            customStyle={styles.buttonStyle}
          />
        </View>
      </>
    ) : (
      <>
        <Text style={styles.pleaseText}>Please Wait...</Text>
        <Text style={styles.subText}>While we prepare your exam</Text>
      </>
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
    >
      <View style={styles.centeredView} activeOpacity={1}>
        <TouchableWithoutFeedback>
          <View style={styles.modalView}>
            <Image
              source={Images.LOGO}
            />
            <Image
              source={Images.PleaseWait}
              style={styles.pleaseImage}
            />
            {renderText()}
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
}

PleaseWaitModal.propTypes = {
  visible: propTypes.bool,
  showText: propTypes.bool,
};
