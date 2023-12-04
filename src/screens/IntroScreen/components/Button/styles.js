import { StyleSheet } from 'react-native';
import { vh, vw } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    flex: 0.2,
    justifyContent: 'flex-start',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: AppTheme.BUTTON_BACKGROUND_03,
    borderRadius: 12,
    height: vh(58),
    justifyContent: 'center',
    width: vw(153),
  },
  buttonText: {
    color: AppTheme.BUTTON_BACKGROUND_04,
    fontFamily: Fonts.INTER_BOLD,
    fontSize: vw(16),
  },
});

export default styles;
