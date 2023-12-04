import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh, vw } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = StyleSheet.create({
  buttonStyle: {
    borderColor: ColorTheme.GREEN_BG,
    borderRadius: 6,
    height: vh(40),
    width: vw(156),
  },
  clockImage: {
    height: vh(37),
    width: vh(37),
  },
  hamburgerImage: {
    height: vh(16),
    width: vw(24),
  },
  mainHeader: {
    alignItems: 'center',
    borderBottomColor: ColorTheme.GREY_BORDER,
    borderBottomWidth: vh(1),
    flexDirection: 'row',
    height: vh(70),
    justifyContent: 'space-between',
    paddingHorizontal: vh(15),
    width: '100%',
  },
  mainViewStyle: {
    justifyContent: 'flex-end',
  },
  timerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '35%',
  },
  timerText: {
    color: ColorTheme.NATIVE_LIGHT_GREY,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(16),
    fontWeight: '500',
    paddingLeft: vh(15),
  },
  viewInstructionsButtonTextStyle: {
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(16),
    fontWeight: '500',
    lineHeight: 19,
  },
});

export default styles;
