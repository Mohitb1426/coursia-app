import { StyleSheet } from 'react-native';
import { vh, vw } from '../../../../common/Dimensions';
import { ColorTheme } from '../../../../common/AppStyles';
import Fonts from '../../../../common/Fonts';

const styles = StyleSheet.create({
  container: {
    bottom: 50,
    left: 10,
    paddingHorizontal: vw(10),
    position: 'absolute',
  },
  currentPriceText: {
    color: ColorTheme.WHITE,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(24),
    fontWeight: '700',
  },
  daysText: {
    color: ColorTheme.BLACK_1,
    fontFamily: Fonts.LATO_BOLD,
    fontSize: vw(14),
    fontWeight: '600',
    marginLeft: vw(4),
    marginTop: 2,
  },
  gstText: {
    color: ColorTheme.BLACK_1,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(10),
    fontWeight: '400',
    marginBottom: vh(20),
  },
  image: {
    flex: 1,
    position: 'relative',
  },
  logo: {
    resizeMode: 'contain',
    width: 150,
  },
  mainContainer: {
    flex: 0.7,
  },
  originalPriceText: {
    color: ColorTheme.ERROR_RED,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(14),
    fontWeight: '400',
    marginTop: 10,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',

  },
  passTitle: {
    color: ColorTheme.WHITE,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(24),
    fontWeight: '700',
  },
  studentIcon: {
    position: 'absolute',
    resizeMode: 'contain',
    right: 5,
    top: -25,
    width: vw(230),
  },
  validText: {
    color: ColorTheme.BLACK_1,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(14),
    fontWeight: '600',
  },
  validityContainer: {
    flexDirection: 'row',
    textAlign: 'center',
  },
});

export default styles;
