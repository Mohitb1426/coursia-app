import { StyleSheet } from 'react-native';

const styles = (AppTheme) => StyleSheet.create({
  flatListContainer: {
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  innerContainer: {
    flex: 1,
  },
  mainContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
  },
});

export default styles;
