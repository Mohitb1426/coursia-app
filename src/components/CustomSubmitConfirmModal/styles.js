import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  additionalButtonStyle: {
    marginRight: vw(5),
  },
  buttonContainer: {
    alignItems: 'center',
    borderColor: ColorTheme.GREEN_BG,
    borderRadius: vh(8),
    borderWidth: 1,
    height: vh(48),
    justifyContent: 'center',
    width: vh(101),
  },
  buttonMainContainer: {
    flexDirection: 'row',
    // flex: 0.4,
    justifyContent: 'space-evenly',
    paddingTop: vh(12),
    width: '70%',
  },
  buttonText: {
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: 16,
    fontWeight: '900',
  },
  caution: {
    height: vh(66),
    width: vh(66),
  },
  colonAdditionalColorStyle: {
    color: ColorTheme.APPLE_BLACK,
  },
  detailsContainer: {
    alignItems: 'flex-start',
    // flex: 0.8,
    justifyContent: 'center',
    paddingTop: vh(10),
  },
  mainContainer: {
    alignItems: 'center',
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
    borderRadius: vh(7),
    // minHeight: vh(356),
    paddingVertical: vh(20),
    width: vw(350),
    // justifyContent : "center",
  },
  modalContent: {
    alignItems: 'center',
    backgroundColor: ColorTheme.MODEL_BACKGROUND_COLOR,
    flex: 1,
    justifyContent: 'center',
  },
  rowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 5,
    width: '100%',
  },
  rowImage: {
    height: vh(15),
    marginRight: vh(12),
    width: vh(15),
  },
  rowText: {
    color: ColorTheme.ADDITIONAL_DETAILS_COLOR,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: vh(0.41),
    // lineHeight: 41,
  },
  sureSubmitText: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: 18,
    fontWeight: '600',
    paddingVertical: vh(10),
  },
  tamilRowText: {
    color: ColorTheme.ADDITIONAL_DETAILS_COLOR,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(15),
    fontWeight: '400',
    letterSpacing: vh(0.41),
    // lineHeight: vh(41),
  },
  tamilSureToSubmit: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(17),
    fontWeight: '600',
    paddingTop: vh(10),
  },
  tamilSureToSubmitTextTwo: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(17),
    fontWeight: '600',
    paddingVertical: vh(5),
  },
  textContainer: {
    width: vw(127),
  },
});

export default styles;
