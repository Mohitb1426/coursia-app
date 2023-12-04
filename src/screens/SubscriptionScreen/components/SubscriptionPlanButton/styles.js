/* eslint-disable react-native/sort-styles */
import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh, vw } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = StyleSheet.create({
  activateButtonStyle: {
    alignSelf: 'center',
    borderRadius: 4,
    justifyContent: 'center',
    paddingHorizontal: vw(5),
    paddingVertical: vh(1),
    width: vw(138),

  },
  activateButtonTextStyle: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.ROBOTO,
    fontSize: vh(12),
    fontWeight: '700',
  },
  currentPriceText: {
    color: ColorTheme.BLACK_1,
    fontFamily: Fonts.ROBOTO,
    fontSize: 16,
    fontWeight: '700',
  },
  daysText: {
    color: ColorTheme.BLACK_1,
    fontFamily: Fonts.LATO_BOLD,
    fontSize: 14,
    fontWeight: '600',
    marginLeft: vw(2),
    marginTop: 1,
  },
  discountText: {
    color: ColorTheme.BLACK_1,
    fontFamily: Fonts.ROBOTO,
    fontSize: 14,
    fontWeight: '400',
  },
  expireTextStyle: {
    color: ColorTheme.GREEN_BG,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(12),
    fontWeight: 'bold',
  },
  gstText: {
    color: ColorTheme.BLACK_1,
    fontFamily: Fonts.ROBOTO,
    fontSize: 10,
    fontWeight: '400',
  },
  inActiveButton: {
    backgroundColor: ColorTheme.white,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    bottom: vh(4),
    elevation: 8,
    height: vh(42),
    justifyContent: 'center',

  },
  includeWhiteBorder: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    elevation: 8,
    paddingVertical: vw(10),
  },
  linearGradient: {
    borderRadius: 8,
    elevation: 8,
    paddingVertical: vw(10),
    marginBottom: 5,
  },
  mainButtonStyle: { marginBottom: 10 },
  mainContainer: {
    paddingHorizontal: vw(18),
  },
  newContainer: {
    paddingHorizontal: vw(18),

  },
  originalPriceText: {
    color: ColorTheme.ERROR_RED,
    fontFamily: Fonts.ROBOTO,
    fontSize: 14,
    fontWeight: '400',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',

  },
  passRenewInfoContainer: {
    backgroundColor: ColorTheme.WHITE,
    justifyContent: 'center',
  },
  passRenewInfoSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: vw(18),
  },
  passTitle: {
    color: ColorTheme.WHITE,
    fontFamily: Fonts.ROBOTO,
    fontSize: 24,
    fontWeight: '700',
  },
  perDayPriceText: {
    color: ColorTheme.black,
    fontFamily: Fonts.ROBOTO,
    fontSize: 24,
    fontWeight: '700',
  },
  perDayStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  perDayText: {
    alignSelf: 'center',
    color: ColorTheme.lightBlack,
    fontFamily: Fonts.ROBOTO,
    fontSize: 14,
    fontWeight: '400',
  },
  planCardButton: {
    backgroundColor: ColorTheme.white,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    bottom: vh(4),
    elevation: 8,
    height: vh(42),
    justifyContent: 'center',

  },
  planExpiredTextStyle: {
    color: ColorTheme.ERROR_RED,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(12),
    fontWeight: 'bold',
  },
  priceButton: {
    alignSelf: 'center',
    backgroundColor: ColorTheme.white,
    borderRadius: 8,
    elevation: 2,
    flexDirection: 'row',
    height: vh(45),
    justifyContent: 'space-between',
    marginTop: vh(8),
    width: vw(263),

  },
  priceContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  recommendedIconStyle: {
    left: 20,
    position: 'absolute',
    top: -8,
  },
  recommendedText: {
    color: ColorTheme.BLACK_1,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(10),
    fontWeight: '400',
  },
  recommendedTomorrow: {
    backgroundColor: ColorTheme.WHITE,
    borderRadius: 2,
    flexWrap: 'wrap',
    left: 18,
    padding: 2,
    position: 'absolute',
    top: -112,
  },
  recommendedWrap: {
    flexWrap: 'wrap',
  },
  renewNowTextStyle: {
    color: ColorTheme.GREEN_BG,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(12),
    fontWeight: 'bold',
  },
  rowContainer: { alignItems: 'baseline', flexDirection: 'row' },
  rowStyle: { alignItems: 'center', flexDirection: 'row' },
  startTextStyle: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(12),
    fontWeight: 'bold',
  },
  subContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  validText: {
    color: ColorTheme.BLACK_1,
    fontFamily: Fonts.ROBOTO,
    fontSize: 14,
    fontWeight: '600',
  },
  validityContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default styles;
