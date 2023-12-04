import { StyleSheet } from 'react-native';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  courseContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    width: '100%',
  },
  imageStyle: {
    height: 12,
    resizeMode: 'contain',
    width: 15,
  },
  mainHeadingTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.ROBOTO,
    fontSize: 16,
    fontWeight: '700',
  },
  textContainerStyle: { flex: 1 },
  viewAllTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.ROBOTO,
    fontSize: 12,
    fontWeight: '400',
  },
  viewTextContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
