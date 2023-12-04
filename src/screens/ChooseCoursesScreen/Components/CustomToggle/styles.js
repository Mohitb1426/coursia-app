import { StyleSheet } from 'react-native';
import Fonts from '../../../../common/Fonts';
// import { ColorTheme } from '../../../../common/AppStyles';
// import { vh, vw } from '../../../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  container: { alignItems: 'center', flexDirection: 'row' },
  titleTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontFamily: Fonts.ROBOTO,
    fontSize: 12,
    fontWeight: '400',
  },
  toggleContainer: (isActive) => {
    return {
      backgroundColor: isActive ? AppTheme.PRIMARY_COLOR : AppTheme.BAR_COLOR,
      borderRadius: 50,
      flexDirection: 'row',
      paddingHorizontal: 4,
      paddingVertical: 4,
      width: 48,
      marginLeft: 8,
    };
  },
  toggleInnerContainer: {
    backgroundColor: AppTheme.SECONDARY_BACKGROUND_02,
    borderRadius: 9,
    height: 18,
    width: 18,
  },
  toggleInnerContainer1: { flex: 1 },
});

export default styles;
