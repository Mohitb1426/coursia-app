import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh, vw } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  errorStyle: {
    borderColor: ColorTheme.ERROR_RED,
    color: ColorTheme.ERROR_RED,
  },
  errorText: {
    color: ColorTheme.ERROR_RED,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(11),
    fontWeight: '600',
    marginTop: vh(10),
    textAlign: 'left',
  },
  textInputStyle: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_12,
    borderColor: AppTheme.DIVIDER_COLOR_01,
    borderRadius: 6,
    borderWidth: 1,
    color: AppTheme.TEXT_COLOR_HEADING_05,
    height: vh(50),
    paddingHorizontal: 20,
    width: vw(329),
  },
});

export default styles;
