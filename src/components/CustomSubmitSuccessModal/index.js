import React, { useContext } from 'react';
import {
  Text,
  View,
  Modal,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import propTypes from 'prop-types';
import { LocalizationContext } from '../../common/LocalizationProvider';
import Images from '../../common/Images';
import styles from './styles';
import useThemedStyles from '../../hooks/useThemedStyles';

function CustomSubmitSuccessModal({ showSubmitSuccessModal, onViewResult }) {
  const Styles = useThemedStyles(styles);
  const { translations } = useContext(LocalizationContext);
  return (
    <Modal visible={showSubmitSuccessModal} transparent>
      <SafeAreaView style={Styles.modalContent}>
        <View style={Styles.mainContainer}>
          <Image source={Images.THUMBS_UP} style={Styles.okayImage} />
          <View style={Styles.submitSuccessViewStyle}>
            <Text style={Styles.submitText}>{translations.SUBMIT_SUCCESS}</Text>
          </View>

          <TouchableOpacity
            style={Styles.viewResultContainer}
            onPress={onViewResult}
          >
            <Text style={Styles.resultText}>{translations.VIEW_RESULTS}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

CustomSubmitSuccessModal.propTypes = {
  showSubmitSuccessModal: propTypes.bool,
  onViewResult: propTypes.func,
};
export default CustomSubmitSuccessModal;
