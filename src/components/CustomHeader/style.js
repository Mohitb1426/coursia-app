import { StyleSheet } from 'react-native';
import { ColorTheme, FontTheme } from '../../common/AppStyles';
import { vh } from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  actionTextStyle: {
    color: ColorTheme.GREEN_BG,
    fontFamily: FontTheme.BOLD,
    fontSize: vh(12),
    textDecorationLine: 'underline',
  },
  backIconStyle: {
    padding: vh(10),
  },
  container: {
    alignItems: 'center',
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flexDirection: 'row',
    height: vh(50),
  },

  spacer: { flex: 1 },
  titleStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.ROBOTO,
    fontSize: vh(18),
    fontWeight: 'bold',
  },
});

export default styles;
