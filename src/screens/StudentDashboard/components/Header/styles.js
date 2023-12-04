import { StyleSheet } from 'react-native';
// import { AppTheme } from '../../../../common/AppStyles';

const styles = (AppTheme) => StyleSheet.create({
  headerHeadingStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontSize: 23,
    fontWeight: '700',
  },
  headerHorizontalContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 16,
  },
  headerImageStyle: {},
  headerTextStyle: {
    color: AppTheme.TEXT_COLOR_CONTENT_01,
    fontSize: 15,
  },
  headerVerticalContainer: {
    flexDirection: 'column',
    flex: 1,
  },
});

export default styles;
