import { View, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
// import SvgIcon from '../../../../common/SvgIcon';
import styles from './styles';
import useThemedStyles from '../../../../hooks/useThemedStyles';
import CustomButton from '../CustomButton';

function ConfirmationModal(props) {
  const {
    isVisible, icon, cardMessage, singleButtonTitle, multipleButton = false,
    onPressLeftButton, onPressRightButton, onPressSingleButton, leftButtonTitle, rightButtonTitle,
  } = props;
  const Styles = useThemedStyles(styles);
  return (
    <Modal isVisible={isVisible}>
      <View style={Styles.modalContainer}>
        <View style={Styles.mainContainer}>
          <View style={Styles.topContainer}>
            <View style={Styles.iconContainer}>
              {icon}
            </View>
            <Text style={Styles.messageTextStyle}>{cardMessage}</Text>
          </View>
          { multipleButton ? (
            <View style={Styles.buttonContainer}>
              <CustomButton
                onPressButton={onPressLeftButton}
                borderButton
                title={leftButtonTitle}
              />
              <View style={Styles.buttonDivider} />
              <CustomButton onPressButton={onPressRightButton} title={rightButtonTitle} />
            </View>
          ) : (
            <View style={Styles.singleButtonComponent}>
              <CustomButton onPressButton={onPressSingleButton} title={singleButtonTitle} />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
}

ConfirmationModal.propTypes = {
  isVisible: PropTypes.bool,
  icon: PropTypes.any,
  cardMessage: PropTypes.string,
  singleButtonTitle: PropTypes.string,
  leftButtonTitle: PropTypes.string,
  rightButtonTitle: PropTypes.string,
  multipleButton: PropTypes.bool,
  onPressLeftButton: PropTypes.func,
  onPressRightButton: PropTypes.func,
  onPressSingleButton: PropTypes.func,
};

export default ConfirmationModal;
