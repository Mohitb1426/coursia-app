import { StyleSheet } from 'react-native';
// import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  container: {
    borderBottomColor: AppTheme.BORDER_COLOR,
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  middleContainer: { alignItems: 'center', flex: 1, justifyContent: 'center' },
});

export default styles;
