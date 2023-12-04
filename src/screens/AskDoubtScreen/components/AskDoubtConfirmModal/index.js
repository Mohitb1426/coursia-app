import React, { useContext } from 'react';
import {
  Text, View, Modal, SafeAreaView, Image,
} from 'react-native';
import propTypes from 'prop-types';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import Images from '../../../../common/Images';
import styles from './style';
import Fonts from '../../../../common/Fonts';
import { ColorTheme } from '../../../../common/AppStyles';
import CustomButton from '../../../../components/CustomButton';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function AskDoubtConfirmModal({
  isVisible,
  deleteTicket,
  closeModal,
}) {
  const Styles = useThemedStyles(styles);
  const { translations } = useContext(LocalizationContext);
  return (
    <Modal visible={isVisible} transparent>
      <SafeAreaView style={Styles.modalContent}>
        <View style={Styles.mainContainer}>
          <Image source={Images.CAUTION} style={Styles.caution} />
          <Text style={Styles.sureSubmitText}>{translations.SURE_TO_DELETE}</Text>

          <View style={Styles.buttonMainContainer}>
            <CustomButton
              textStyle={[Styles.buttonText, Styles.additionalButtonStyle]}
              customStyle={Styles.buttonContainer}
              onButtonPress={closeModal}
              buttonText={translations.NO}
              isDisabled={false}
              textColor={ColorTheme.GREEN_BG}
              buttonColor={ColorTheme.WHITE}
              fontFamily={Fonts.INTER_REGULAR}
              fontWeight="700"
            />
            <CustomButton
              textStyle={[Styles.buttonText, Styles.additionalButtonStyle]}
              customStyle={Styles.buttonContainer}
              onButtonPress={deleteTicket}
              buttonText={translations.YES}
              isDisabled={false}
              textColor={ColorTheme.WHITE}
              buttonColor={ColorTheme.GREEN_BG}
              fontFamily={Fonts.INTER_REGULAR}
              fontWeight="700"
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}
AskDoubtConfirmModal.propTypes = {
  isVisible: propTypes.bool,
  deleteTicket: propTypes.func,
  closeModal: propTypes.func,
};

export default AskDoubtConfirmModal;
