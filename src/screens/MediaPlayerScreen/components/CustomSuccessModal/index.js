import {
  Text,
  View,
  Modal,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from './style';
import { ColorTheme } from '../../../../common/AppStyles';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import Images from '../../../../common/Images';
import useThemedStyles from '../../../../hooks/useThemedStyles';

export function CustomSuccessModal({ isBookMark, onClose, isVisible = false }) {
  const Styles = useThemedStyles(styles);
  const { translations } = useContext(LocalizationContext);
  const mediaPlayerState = useSelector((state) => state.reducerMediaPlayer);
  const { showNotesUpdatedText } = mediaPlayerState;

  return (
    <Modal
      visible={isVisible}
      transparent
      onRequestClose={onClose}
      backdropColor="transparent"
    >
      <SafeAreaView style={Styles.modalContent}>
        <View style={Styles.mainContainer}>
          <View style={Styles.crossContainer}>
            <TouchableOpacity onPress={onClose}>
              <Image style={Styles.closeIcon} source={Images.CROSS_ICON} />
            </TouchableOpacity>
          </View>

          <View style={Styles.imageContainer}>
            <Image
              source={isBookMark ? Images.BOOKMARKED : Images.NOTED}
              style={Styles.titleImage}
            />
            {isBookMark ? (
              <Text style={[Styles.titleStyle, { color: ColorTheme.ORANGE_TITLE }]}>
                {translations.MODAL_BOOKMARK}
              </Text>
            ) : (
              <Text style={[Styles.titleStyle, { color: ColorTheme.GREEN_BG }]}>
                {showNotesUpdatedText ? translations.MODAL_NOTES_UPDATED : translations.MODAL_NOTES}
              </Text>
            )}
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

CustomSuccessModal.propTypes = {
  isBookMark: propTypes.any,
  onClose: propTypes.any,
  isVisible: propTypes.bool,
};
