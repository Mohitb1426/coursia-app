import { StyleSheet } from 'react-native';
import { vh, vw } from '../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  formContainer: {
    padding: vh(10),
  },
  infoHeading: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontSize: vh(16),
    fontWeight: '600',
    marginStart: vw(3),
    marginTop: vh(10),
  },
  innerContainer: {
    justifyContent: 'center',
    paddingTop: vh(15),
  },
  keyboardContainer: { flex: 1 },
  mainContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
  },
  topTextStyle: {
    color: AppTheme.placeholderColor,
    fontSize: vw(10),
    fontWeight: '400',
    marginStart: vw(20),
    marginTop: vh(10),
  },
});

export default styles;
