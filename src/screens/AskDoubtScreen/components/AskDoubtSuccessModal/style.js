import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh, vw } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  doubtPostedIcon: {
    height: vh(100),
    width: vh(100),
  },
  firstTextLineStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.ROBOTO,
    fontSize: vh(16),
    fontWeight: 'bold',
    marginTop: vh(15),
  },
  fourthTextLineStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.ROBOTO,
    fontSize: vh(16),
    fontWeight: '300',
  },
  mainContainer: {
    alignItems: 'center',
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
    borderRadius: vh(12),
    height: vh(306),
    justifyContent: 'center',
    marginVertical: vh(20),
    paddingVertical: vh(20),
    width: vw(328),
  },
  modalContent: {
    alignItems: 'center',
    backgroundColor: ColorTheme.MODAL_BLACK,
    flex: 1,
    justifyContent: 'center',
  },
  secondTextLineStyle: {
    color: ColorTheme.green06,
    fontFamily: Fonts.ROBOTO,
    fontSize: vh(20),
    fontWeight: 'bold',
    marginTop: vh(10),
  },
  thirdTextLineStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.ROBOTO,
    fontSize: vh(16),
    fontWeight: '300',
    marginTop: vh(25),
  },
});

export default styles;
