import { StyleSheet } from 'react-native';
import { vh, vw } from '../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    alignItems: 'center',
    backgroundColor: AppTheme.NOT_FOUND_BG,
    borderRadius: 5,
    elevation: 1,
    flexDirection: 'row',
    height: '80%',
    justifyContent: 'space-around',
    width: '95%',
  },
  noTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontSize: vw(18),
    fontWeight: '700',
    marginTop: vh(30),
  },
  textStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
