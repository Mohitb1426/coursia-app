import { StyleSheet } from 'react-native';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  buttonContainer: (isSuccessButton, borderButton) => {
    return borderButton ? {
      alignItems: 'center',
      borderWidth: 1,
      borderColor: AppTheme.PRIMARY_COLOR,
      // backgroundColor: isSuccessButton ? AppTheme.PRIMARY_COLOR : AppTheme.PRIMARY_RED_COLOR,
      borderRadius: 6,
      flex: 1,
      justifyContent: 'center',
      paddingVertical: 14,
    } : {
      alignItems: 'center',
      backgroundColor: isSuccessButton ? AppTheme.PRIMARY_COLOR : AppTheme.PRIMARY_RED_COLOR,
      borderRadius: 6,
      flex: 1,
      justifyContent: 'center',
      paddingVertical: 14,
    };
  },
  buttonTextStyle: (borderButton) => {
    return {
      color: borderButton ? AppTheme.PRIMARY_COLOR : AppTheme.TEXT_COLOR_HEADING_03,
      fontFamily: Fonts.ROBOTO,
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 21,
    };
  },
  //   buttonContainer: {
  //     alignItems: 'center',
  //     backgroundColor: AppTheme.PRIMARY_COLOR,
  //     borderRadius: 6,
  //     flex: 1,
  //     justifyContent: 'center',
  //     marginBottom: 22,
  //     marginHorizontal: 14,
  //     marginTop: 10,
  //     paddingVertical: 12,
  //   },
  //   buttonTextStyle: {
  //     color: AppTheme.TEXT_COLOR_HEADING_03,
  //     fontFamily: Fonts.ROBOTO,
  //     fontSize: 16,
  //     fontWeight: 'bold',
  //     lineHeight: 22,
  //   },
  //   container: {
  //     backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
  //     borderRadius: 8,
  //     elevation: 4,
  //     flex: 1,
  //     marginBottom: 14,
  //     paddingHorizontal: 7,
  //     shadowColor: AppTheme.SHADOW_COLOR,
  //     shadowOffset: {
  //       width: 0,
  //       height: 2,
  //     },
  //     shadowOpacity: 0.23,
  //     shadowRadius: 2.62,
  //   },
  //   detailTitleStyle: {
  //     color: AppTheme.TEXT_COLOR_CONTENT_02,
  //     fontFamily: Fonts.ROBOTO,
  //     fontSize: 14,
  //     fontWeight: 'bold',
  //     lineHeight: 22,
  //   },
  //   detailValueStyle: {
  //     color: AppTheme.TEXT_COLOR_HEADING,
  //     fontFamily: Fonts.ROBOTO,
  //     fontSize: 14,
  //     fontWeight: 'bold',
  //     lineHeight: 22,
  //   },
  //   detailWrapper: {
  //     borderColor: AppTheme.CARD_BORDER_COLOR,
  //     borderStyle: 'dashed',
  //     borderTopWidth: 1,
  //     flexDirection: 'row',
  //     paddingHorizontal: 14,
  //     paddingVertical: 16,
  //   },
  //   flexStyle: { flex: 1 },
  //   titleContainer: {
  //     paddingHorizontal: 14,
  //     paddingVertical: 16,
  //   },
  //   titleTextStyle: {
  //     color: AppTheme.TEXT_COLOR_HEADING,
  //     fontFamily: Fonts.ROBOTO,
  //     fontSize: 16,
  //     fontWeight: '700',
  //     lineHeight: 20,
  //   },

});

export default styles;
