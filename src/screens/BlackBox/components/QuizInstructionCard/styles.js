import { StyleSheet } from 'react-native';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  bottomDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  bottomDetailTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_02,
    fontFamily: Fonts.ROBOTO,
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  container: {
    backgroundColor: AppTheme.SECONDARY_BACKGROUND_02,
    borderRadius: 8,
    elevation: 4,
    marginBottom: 24,
    marginHorizontal: 16,
    minHeight: 169,
    overflow: 'hidden',
    shadowColor: AppTheme.SHADOW_COLOR,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  detailTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_03,
    fontFamily: Fonts.ROBOTO,
    fontSize: 14,
    // fontWeight: 'bold',
    lineHeight: 25,
  },
  detailTopTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_03,
    fontFamily: Fonts.ROBOTO,
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 21,
  },
  titleTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_03,
    fontFamily: Fonts.ROBOTO,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 26,
  },
  topContainer: {
    backgroundColor: AppTheme.PRIMARY_COLOR,
    // flex: 1,
    paddingBottom: 14,
    paddingHorizontal: 17,
    paddingTop: 25,
  },
  topDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 14,
    width: '100%',
  },
  topDetailRowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },

});

export default styles;
