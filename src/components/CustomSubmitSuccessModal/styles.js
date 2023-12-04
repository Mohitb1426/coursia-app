import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
    borderRadius: vh(6),
    // height: vh(230),
    padding: vh(20),
    width: vw(300),
  },
  modalContent: {
    alignItems: 'center',
    backgroundColor: ColorTheme.MODEL_BACKGROUND_COLOR,
    flex: 1,
    justifyContent: 'center',
  },
  okayImage: {
    height: vh(66),
    width: vh(66),
  },
  resultText: {
    color: ColorTheme.GREEN_BG,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(16),
    fontWeight: '700',
  },
  submitSuccessViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.INTER,
    fontSize: vh(18),
    marginVertical: vh(21),
    textAlign: 'center',
  },
  viewResultContainer: {
    alignItems: 'center',
    borderColor: ColorTheme.GREEN_BG,
    borderRadius: vh(8),
    borderWidth: 1,
    // height: 48,
    justifyContent: 'center',
    paddingVertical: 2,
    width: vw(145),
  },
});

export default styles;
