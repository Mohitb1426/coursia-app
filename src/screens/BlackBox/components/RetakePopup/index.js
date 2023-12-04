import React from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import SvgIcon from '../../../../common/SvgIcon';
import { CheckBoxItem, CustomButton } from '..';
import styles from './styles';
import useThemedStyles from '../../../../hooks/useThemedStyles';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import { setRetakeIncorrect, setRetakeUnattempted } from '../../BlackBoxScreen/BlackBoxQuizDetailListScreen/actionBlackBoxQuizDetailList';

function RetakePopup(props) {
  const dispatch = useDispatch();
  const { translations } = React.useContext(LocalizationContext);
  const blackBoxQuizDetailData = useSelector((state) => state.reducerBlackBoxQuizDetailList);
  const {
    checkUnattempted,
    checkIncorrect,
  } = blackBoxQuizDetailData;
  const {
    isOpen, onPressClose, data, onPressRetake,
  } = props;
  const { name, analysis_data } = data;
  const Styles = useThemedStyles(styles);
  return (
    <Modal isVisible={isOpen}>
      <View style={Styles.modalContainer}>
        <View style={Styles.mainContainer}>
          <View style={Styles.headerContainer}>
            <Text style={Styles.titleTextStyle}>{translations.B_B_RETAKE_TEST}</Text>
            <Text style={Styles.detailTextStyle}>
              {`Do you wish to retake the ${name} once again?`}
            </Text>
          </View>
          {analysis_data?.unattempted_count > 0 && (
          <CheckBoxItem
            isChecked={checkUnattempted}
            count={analysis_data?.unattempted_count}
            checkBoxIcon={<SvgIcon.UnattemptedCheckBox />}
            title={translations.B_B_UNATTEMPTED_QUES}
            onPressCheckBox={() => dispatch(setRetakeUnattempted(!checkUnattempted))}
          />
          )}
          {analysis_data.incorrect_count > 0 && (
          <CheckBoxItem
            isChecked={checkIncorrect}
            count={analysis_data?.incorrect_count}
            checkBoxIcon={<SvgIcon.IncorrectCheckBox />}
            title={translations.B_B_INCORRECT_QUES}
            onPressCheckBox={() => dispatch(setRetakeIncorrect(!checkIncorrect))}
          />
          )}
          <View style={Styles.buttonContainer}>
            <CustomButton
              title="Retake"
              isDisable={!checkIncorrect && !checkUnattempted}
              onPressButton={() => onPressRetake(name)}
            />
            <View style={Styles.buttonDivider} />
            <CustomButton
              title={translations.B_B_CANCEL}
              isSuccessButton={false}
              onPressButton={onPressClose}
            />
          </View>
        </View>

      </View>
    </Modal>
  );
}

RetakePopup.propTypes = {
  isOpen: PropTypes.bool,
  data: PropTypes.object,
  onPressClose: PropTypes.func,
  onPressRetake: PropTypes.func,
};

export default RetakePopup;
