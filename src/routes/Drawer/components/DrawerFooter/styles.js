import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';

const styles = (AppTheme) => StyleSheet.create({
  bottomContainer: {
    borderTopColor: AppTheme.BORDER_COLOR,
    borderTopWidth: 1,
    marginBottom: 30,
    paddingLeft: 28,
    paddingRight: 16,
    paddingTop: 30,
  },
  copyRightTextStyle: {
    color: ColorTheme.green06,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
  },
  passTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
  },
  versionTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
    paddingTop: 20,
  },
});

export default styles;
