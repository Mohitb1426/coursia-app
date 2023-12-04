import { StyleSheet } from 'react-native';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  container: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
    borderRadius: 8,
    elevation: 4,
    flex: 1,
    paddingBottom: 17,
    paddingLeft: 18,
    paddingRight: 5,
    paddingTop: 13,
    shadowColor: AppTheme.SHADOW_COLOR,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  detailTextContainer: {
    paddingTop: 8,
  },
  detailTextStyle: {
    color: AppTheme.TEXT_COLOR_CONTENT_02,
    fontFamily: Fonts.ROBOTO,
    fontSize: 14,
    fontWeight: '400',
    // lineHeight: 16,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: AppTheme.SECONDARY_BACKGROUND_01,
    borderRadius: 24,
    height: 45,
    justifyContent: 'center',
    width: 45,
  },
  textContainer: {
    paddingTop: 15,
  },
  titleTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontFamily: Fonts.ROBOTO,
    fontSize: 24,
    fontWeight: '700',
  },
});

export default styles;
