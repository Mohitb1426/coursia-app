import { StyleSheet } from 'react-native';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  noDataContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  noDataTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontFamily: Fonts.ROBOTO,
    fontSize: 24,
    fontWeight: '600',
    paddingTop: 32,
  },
});

export default styles;
