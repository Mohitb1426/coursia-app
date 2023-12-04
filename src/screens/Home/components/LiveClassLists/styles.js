import { StyleSheet } from 'react-native';
import { ColorTheme, ColorThemeLight } from '../../../../common/AppStyles';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  activeHeaderTabText: {
    color: ColorTheme.white,
  },
  detailTextStyle: {
    color: AppTheme.TEXT_COLOR_CONTENT_01,
    fontFamily: Fonts.ROBOTO,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    paddingTop: 8,
  },
  filterContainer: { paddingTop: 14 },
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerRightText: {
    color: ColorThemeLight.PRIMARY_COLOR,
    fontFamily: Fonts.ROBOTO,
    fontSize: 12,
    fontWeight: 'bold',
    // lineHeight: 12,
  },
  headerTabContainer: (isActive) => {
    return {
      backgroundColor: isActive ? ColorThemeLight.PRIMARY_COLOR : ColorTheme.PRIMARY_BACKGROUND,
      borderColor: isActive ? ColorThemeLight.PRIMARY_COLOR : ColorThemeLight.BORDER_COLOR,
      borderRadius: 4,
      borderWidth: 1,
      marginRight: 8,
      paddingHorizontal: 8,
      paddingVertical: 9,
    };
  },
  headerTabText: (is_active) => {
    return {
      color: is_active
        ? AppTheme.TEXT_COLOR_HEADING_03
        : AppTheme.TEXT_COLOR_HEADING_05,
      fontFamily: Fonts.ROBOTO,
      fontSize: 10,
      fontWeight: '700',
      lineHeight: 12,
      textAlign: 'center',
    };
  },
  headingContainer: { flex: 1 },
  headingTextStyle: {
    // fontFamily: Fonts.LATO_BOLD,
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.ROBOTO,
    fontSize: 16,
    fontWeight: 'bold',
    // lineHeight: 16,
  },
  liveBGContainer: { height: '100%', width: '100%' },
  liveClassCard: {
    height: 192, paddingBottom: 2, paddingTop: 18, width: '100%',
  },
  liveImageStyle: {
    height: '100%',
    resizeMode: 'stretch',
    width: '100%',
  },
  mainContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_06,
    paddingBottom: 16,
    paddingHorizontal: 12,
    paddingTop: 14,
  },
  tabStyleContainer: { paddingTop: 16 },
  viewAllContainer: {
    alignItems: 'flex-end',
    borderColor: ColorThemeLight.PRIMARY_COLOR,
    borderRadius: 4,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
});

export default styles;
