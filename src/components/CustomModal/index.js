import React, { useContext } from 'react';
import Modal from 'react-native-modal';
import { TouchableWithoutFeedback, View } from 'react-native';
import propTypes from 'prop-types';
import { ColorTheme } from '../../common/AppStyles';
import styles from './style';
import { ThemeContext } from '../../common/ThemeProvider';

export function CustomModal(props) {
  const { darkMode } = useContext(ThemeContext);
  const {
    children, modalStyle, modalHeight = 400, backdropColor = 'black',
    backdropOpacity = 0.4,
    borderTopLeftRadius = 25,
    borderTopRightRadius = 25,
    borderBottomLeftRadius = 0,
    borderBottomRightRadius = 0,
    backgroundColor = darkMode ? ColorTheme.BOTTOM_SHEET_PRIMARY_BACKGROUND : ColorTheme.WHITE,
    visible = false, onModalHide = () => { }, closeDropDown = () => { }, onBackdropPress = () => { }, alignBottom = true, modalWidth = '100%', paddingBottom = 0, animationIn,
  } = props;
  return (
    <Modal
      isVisible={visible}
      onRequestClose={onModalHide}
      backdropColor={backdropColor}
      backdropOpacity={backdropOpacity}
      onModalHide={() => { onModalHide(false); }}
      onBackdropPress={() => onBackdropPress()}
      style={[alignBottom ? styles.bottomModal : null, modalStyle]}
      animationIn={animationIn || ''}
    >
      <TouchableWithoutFeedback onPress={closeDropDown}>
        <View style={[styles.modalContent, {
          height: modalHeight,
          width: modalWidth,
          borderTopLeftRadius,
          borderTopRightRadius,
          borderBottomLeftRadius,
          borderBottomRightRadius,
          paddingBottom,
          backgroundColor,
        }]}
        >
          {children}
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

CustomModal.propTypes = {
  children: propTypes.any,
  modalStyle: propTypes.object,
  modalHeight: propTypes.any,
  backdropColor: propTypes.string,
  backdropOpacity: propTypes.number,
  borderTopLeftRadius: propTypes.number,
  borderTopRightRadius: propTypes.number,
  borderBottomLeftRadius: propTypes.number,
  borderBottomRightRadius: propTypes.number,
  visible: propTypes.bool,
  onModalHide: propTypes.func,
  onBackdropPress: propTypes.func,
  alignBottom: propTypes.bool,
  modalWidth: propTypes.string,
  paddingBottom: propTypes.number,
  animationIn: propTypes.any,
  closeDropDown: propTypes.func,
  backgroundColor: propTypes.any,
};
