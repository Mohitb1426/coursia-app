import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  buttonStyle: (isActive, is_icon) => {
    return {
      alignItems: 'center',
      backgroundColor: isActive ? AppTheme.PRIMARY_COLOR : null,
      borderRadius: 10,
      flex: 0.5,
      height: 20,
      justifyContent: 'center',
      flexDirection: is_icon ? 'row' : 'column',
    };
  },
  mainContainer: {
    alignSelf: 'center',
    borderColor: ColorTheme.GREEN_BG,
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: 'row',
    // marginEnd: 10,
    padding: 2,
    width: 95,
  },
  textStyle: (isActive) => {
    return {
      fontFamily: Fonts.ROBOTO,
      fontSize: 10,
      fontWeight: 'bold',
      color: isActive ? AppTheme.TEXT_COLOR_HEADING_03 : AppTheme.TEXT_COLOR_HEADING,
    };
  },
});

export default styles;
