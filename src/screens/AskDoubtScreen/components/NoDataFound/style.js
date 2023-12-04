import { StyleSheet } from 'react-native';
import { vh } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  imageContainer: {
    marginBottom: vh(30),
  },
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontFamily: Fonts.ROBOTO,
    fontSize: 20,
    fontWeight: '700',
  },
});

export default styles;
