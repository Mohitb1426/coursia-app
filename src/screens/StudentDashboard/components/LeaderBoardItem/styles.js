/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
// import { AppTheme } from '../../../../common/AppStyles';

const styles = (AppTheme) => StyleSheet.create({
  correctAnsStyle: {
    color: AppTheme.TEXT_COLOR_CONTENT_03,
    fontSize: 11,
    width: 150,
  },
  imageStyle: {},

  mainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
    marginHorizontal: 16,
    paddingHorizontal: 16,
  },

  mainContainerSelf: {
    alignItems: 'center',
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_02,
    borderColor: AppTheme.CARD_BORDER_COLOR,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    height: 60,
    marginHorizontal: 16,
    paddingHorizontal: 16,
  },

  mainContainerTopper: {
    alignItems: 'center',
    backgroundColor: AppTheme.SHADOW_COLOR_01,
    borderRadius: 8,
    flexDirection: 'row',
    height: 60,
    marginHorizontal: 16,
    paddingHorizontal: 16,
  },
  nameLogoStyle: {
    alignItems: 'center',
    backgroundColor: AppTheme.SECONDARY_BACKGROUND,
    borderRadius: 35,
    height: 35,
    justifyContent: 'center',
    width: 35,
  },
  nameStyle: (self) => {
    return {
      color: self === 1 ? AppTheme.TEXT_COLOR_HEADING_02 : AppTheme.TEXT_COLOR_HEADING,
      fontSize: 14,
      fontWeight: '600',
    };
  },
  rankStyleBronze: {
    backgroundColor: AppTheme.BRONZE_COLOR,
    borderColor: AppTheme.BRONZE_BORDER_COLOR,
    borderRadius: 8,
    borderWidth: 1,
    color: AppTheme.TEXT_COLOR_HEADING_03,
    fontSize: 15,
    fontWeight: '700',
    height: 38,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 38,
  },
  rankStyleGold: (item) => {
    const { backgroundColor, borderColor } = item;
    return {
      backgroundColor,
      borderColor,
      borderRadius: 8,
      borderWidth: 1,
      color: AppTheme.TEXT_COLOR_HEADING_02,
      fontSize: 15,
      fontWeight: '700',
      height: 38,
      textAlign: 'center',
      textAlignVertical: 'center',
      width: 38,
    };
  },
  rankStyleOther: {
    backgroundColor: AppTheme.COMMON_COLOR,
    borderColor: AppTheme.COMMON_BORDER_COLOR,
    borderRadius: 8,
    borderWidth: 1,
    color: AppTheme.TEXT_COLOR_HEADING_03,
    fontSize: 15,
    fontWeight: '700',
    height: 38,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 38,
  },
  rankStyleSelf: {
    backgroundColor: AppTheme.PRIMARY_COLOR,
    borderColor: AppTheme.SECONDARY_SUB_COLOR_01,
    borderRadius: 8,
    borderWidth: 1,
    color: AppTheme.TEXT_COLOR_HEADING_03,
    fontSize: 15,
    fontWeight: '700',
    height: 38,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 38,
  },
  rankStyleSilver: {
    backgroundColor: AppTheme.SILVER_COLOR,
    borderColor: AppTheme.SILVER_BORDER_COLOR,
    borderRadius: 8,
    borderWidth: 1,
    color: AppTheme.TEXT_COLOR_HEADING_03,
    fontSize: 15,
    fontWeight: '700',
    height: 38,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 38,
  },
  scoreStyle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
  },
  spacer: {
    flex: 0.1,
  },
  subContainer: {
    flexDirection: 'column',
    flex: 1,
    marginStart: 13,
  },
});

export default styles;
