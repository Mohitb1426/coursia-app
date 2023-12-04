import { StyleSheet } from 'react-native';

const styles = (AppTheme) => StyleSheet.create({
  flatListContainer: { flex: 1 },
  mainContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flexDirection: 'column',
    flex: 1,
  },
});

export default styles;
