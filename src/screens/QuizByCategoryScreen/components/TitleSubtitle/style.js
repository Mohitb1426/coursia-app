import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh, vw } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = StyleSheet.create({
  mainContainer: {
    paddingBottom: vh(10),
    paddingHorizontal: vh(18),
    paddingTop: vh(15),
  },

  subtitle: {
    alignSelf: 'flex-start',
    color: ColorTheme.NOTE_TEXT_COLOR,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(14),
    fontWeight: '500',
    marginTop: vh(2),
  },
  title: {
    alignSelf: 'flex-start',
    color: ColorTheme.BLACK_1,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(18),
    fontWeight: '700',
  },
});

export default styles;
