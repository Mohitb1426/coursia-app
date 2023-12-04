import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
// import { vh, vw } from '../../../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  activeButton: {
    backgroundColor: ColorTheme.GREEN_BG,
  },
  activeTabTextStyle: {
    color: ColorTheme.light01,
  },
  mainContainer: {
    alignItems: 'center',
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_04,
    borderRadius: 10,
    borderStyle: 'solid',
    flexDirection: 'row',
    height: 54,
    justifyContent: 'space-between',
    padding: 7,
    width: '100%',
  },
  tabButtonContainer: {
    alignItems: 'center',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    width: '33%',
  },
  tabTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontSize: 16,
    fontWeight: '500',
    // lineHeight: 17,
    textAlign: 'center',
  },
});

export default styles;
