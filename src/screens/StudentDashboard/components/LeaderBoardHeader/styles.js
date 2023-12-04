import { StyleSheet } from 'react-native';
// import { AppTheme } from '../../../../common/AppStyles';

const styles = (AppTheme) => StyleSheet.create({
  leaderBoardHeader: {
    flexDirection: 'row',
    margin: 16,
  },

  leaderBoardHeaderSubTitle: {
    color: AppTheme.TEXT_COLOR_CONTENT_02,
    fontSize: 12,
  },
  leaderBoardHeaderTitle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    flex: 1,
    fontSize: 14,
    fontWeight: '700',
  },
});

export default styles;
