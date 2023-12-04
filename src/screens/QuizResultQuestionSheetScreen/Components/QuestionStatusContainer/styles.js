import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import Fonts from '../../../../common/Fonts';
import { vh, vw } from '../../../../common/Dimensions';

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: ColorTheme.LIGHT_GREEN,
    borderColor: ColorTheme.GREEN_BG,
    borderRadius: 6,
    borderWidth: 1,
    justifyContent: 'center',
    marginRight: vw(15),
    minHeight: vh(40),
    width: vw(156),
  },
  mainContainer: {
    paddingHorizontal: vw(10),
  },
  questionStatusComponent: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: vh(15),
  },
  questionStatusLabel: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  roundStatus: {
    borderRadius: 24 / 2,
    height: 24,
    marginRight: 4,
    width: 24,
  },
  roundStatusBorder: { borderColor: ColorTheme.ADDITIONAL_DETAILS_COLOR, borderWidth: 1 },
  statusTextStyle: {
    fontFamily: Fonts.INTER_SEMI_BOLD,
    fontSize: vh(12),
    lineHeight: vh(41),
  },
  touchableContainer: {
    // backgroundColor: ColorTheme.light01,
  },
  viewInstructionsButtonTextStyle: {
    // marginRight: vw(17),
    color: ColorTheme.GREEN_BG,
    fontFamily: Fonts.INTER_SEMI_BOLD,
    fontSize: vh(16),
    fontWeight: '500',
  },
});

export default styles;
