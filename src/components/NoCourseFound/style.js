import { StyleSheet } from 'react-native';
import { vh, vw } from '../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  noTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontSize: vw(25),
    fontWeight: '700',
    marginTop: vh(30),
  },
});

export default styles;
