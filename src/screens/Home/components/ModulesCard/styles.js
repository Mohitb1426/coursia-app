import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  bgContainer: {
    backgroundColor: ColorTheme.GREEN01,
    borderRadius: 48 / 2,
    height: 48,
    width: 48,

  },
  imageStyle: {
    height: 48,
    width: 48,
  },
  mainContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_09,
    elevation: 0,
    marginTop: 10,
    paddingBottom: 16,
    shadowColor: AppTheme.SHADOW_COLOR,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    width: '100%',
  },
  moduleContainer: (ScreenWidth) => {
    return {
      alignItems: 'center',
      backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
      borderRadius: 6.34,
      justifyContent: 'center',
      marginHorizontal: 16,
      marginTop: 16,
      width: ScreenWidth / 6.12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 10,
      minHeight: 50,

    };
  },
  moduleMenuContainer: { alignItems: 'center', justifyContent: 'flex-start' },
  moduleTextContainer: (ScreenWidth, appLanguage) => {
    const isTamil = appLanguage === 'tn';
    const minWidthForTamil = ScreenWidth / 6.1;
    const minWidthForEnglish = ScreenWidth / 5.15;
    return {
      color: AppTheme.TEXT_COLOR_HEADING,
      fontFamily: Fonts.ROBOTO,
      fontSize: 10,
      fontWeight: 'bold',
      lineHeight: 14.8,
      width: isTamil ? minWidthForTamil : minWidthForEnglish,
      paddingBottom: 5,
      paddingTop: 4.2,
      textAlign: 'center',
    };
  },
  subContainer: {
    flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 12, width: '100%',
  },

});

export default styles;
