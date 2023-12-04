import { StyleSheet } from 'react-native';

const styles = (AppTheme) => StyleSheet.create({
  courseTabContainer: { paddingBottom: 2, paddingHorizontal: 19, paddingTop: 13 },
  mainContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
  },
  noDataContainer: {
    alignItems: 'center', height: 150, justifyContent: 'center', width: '100%',
  },
  noDataFoundText: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
  },
  toggleContainer: { alignItems: 'flex-end', paddingHorizontal: 19 },
});

export default styles;
