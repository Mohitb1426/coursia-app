import { StyleSheet } from 'react-native';
import { vh, vw } from '../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  container: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
  },
  headerStyle: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
  },
  mainContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
    padding: vw(15),
  },
  svgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: vh(15),
  },
});

export default styles;
