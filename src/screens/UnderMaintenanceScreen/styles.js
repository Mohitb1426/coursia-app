import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import Fonts from '../../common/Fonts';

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    flex: 0.25,
    justifyContent: 'flex-end',
  },
  customStyle: {
    alignItems: 'center',
    borderColor: ColorTheme.GREEN_BG,
    borderRadius: 6,
    borderWidth: 1,
    height: 48,
    justifyContent: 'center',
    width: 340,
  },
  mainContainer: {
    flex: 1,
  },
  mainHeading: {
    color: ColorTheme.BLACK_1,
    fontFamily: Fonts.ROBOTO,
    fontSize: 20,
    fontWeight: '700',
  },
  oopsIcon: {
    backgroundColor: ColorTheme.ALICE_BLUE,
    flex: 0.6,
    justifyContent: 'flex-end',
  },
  subHeading: {
    color: ColorTheme.BLACK_1,
    fontFamily: Fonts.ROBOTO,
    fontSize: 14,
    fontWeight: '400',
  },
  subHeadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
    flex: 0.1,
    justifyContent: 'space-around',
    marginTop: 30,
  },
});
export default styles;
