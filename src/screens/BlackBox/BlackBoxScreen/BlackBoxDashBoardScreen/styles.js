import { StyleSheet } from 'react-native';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  container: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
  },
  customLockStyle: { paddingHorizontal: 20 },
  headerCardContainer: { alignItems: 'center', flexDirection: 'row', paddingTop: 14 },
  headerCardDivider: { width: 16 },
  headerContainer: { paddingHorizontal: 17 },
  headerTitleStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontFamily: Fonts.ROBOTO,
    fontSize: 18,
    fontWeight: 'bold',
  },
  listCardContainer: { paddingBottom: 14, paddingHorizontal: 17 },
  listHeaderContainer: { paddingBottom: 14, paddingTop: 24 },
});

export default styles;
