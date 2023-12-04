import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    flex: 0.2,
    justifyContent: 'flex-start',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: ColorTheme.GREEN_BG,
    borderRadius: 12,
    height: vh(58),
    justifyContent: 'center',
    width: vw(153),
  },
  buttonText: {
    color: ColorTheme.WHITE,
    fontFamily: Fonts.INTER_BOLD,
    fontSize: vw(16),
  },
  container: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
  },
  headerText: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(16),
    fontStyle: 'normal',
    fontWeight: '500',
  },
  indicatorStyle: { backgroundColor: ColorTheme.GREEN_BG, height: 2 },
  mainHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    height: vh(60),
    justifyContent: 'space-between',
    paddingLeft: vw(47),
    paddingRight: vw(12),
    position: 'relative',
    width: '100%',
  },
  scrollViewContainer: { height: '100%', width: '100%' },
  tabBarContainer: { backgroundColor: AppTheme.PRIMARY_BACKGROUND_01 },
  tabBarTextStyle: (color) => {
    const textColor = color || ColorTheme.dark01;
    return {
      color: textColor,
      fontFamily: Fonts.INTER_BOLD,
      fontSize: 16,
      fontWeight: '500',
      margin: 8,
      textAlign: 'center',
    };
  },
  tabStyle: { paddingBottom: 0, paddingHorizontal: 10, width: 'auto' },
});

export default styles;
