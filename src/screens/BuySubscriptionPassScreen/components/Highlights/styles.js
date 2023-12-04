import { StyleSheet } from 'react-native';
import { vh, vw } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginBottom: vh(18),
  },
  titleText: {
    color: AppTheme.TEXT_COLOR_CONTENT_01,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(14),
    fontWeight: '600',
    marginLeft: vw(8),
  },
});

export default styles;
