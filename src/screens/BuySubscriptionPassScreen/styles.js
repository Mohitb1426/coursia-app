import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import Fonts from '../../common/Fonts';
import { vw, vh } from '../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  btnText: {
    color: ColorTheme.WHITE,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(16),
    fontWeight: '700',
    marginVertical: vh(4),
  },
  button: {
    alignItems: 'center',
    backgroundColor: ColorTheme.GREEN_BG,
    borderRadius: 5,
    justifyContent: 'center',
    marginHorizontal: vw(12),
    marginTop: vh(14),
    paddingHorizontal: vh(10),
    padding: vw(12),
  },
  highlightText: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(18),
    fontWeight: '700',
    marginVertical: vh(20),
  },
  mainContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
    paddingBottom: vh(10),
  },
  secondaryContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
});

export default styles;
