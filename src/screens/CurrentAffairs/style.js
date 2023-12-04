import { StyleSheet } from 'react-native';

const styles = (AppTheme) => StyleSheet.create({
  calenderStyle: { borderRadius: 5 },
  headerSubContainer: { height: '10%' },
  mainContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flexDirection: 'column',
    flex: 1,
  },
  mainHeaderContainer: { flex: 1 },
  pagerView: {
    flex: 0.88,

  },
  verticalContainer: {
    flexDirection: 'column',
    flex: 1,
  },
});

export default styles;
