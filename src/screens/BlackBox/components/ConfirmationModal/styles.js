import { StyleSheet } from 'react-native';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 48,
    paddingHorizontal: 30,
  },
  buttonDivider: { width: 24 },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
    borderRadius: 6,
    minHeight: 255,
    paddingHorizontal: 26,
    paddingVertical: 30,
  },
  messageTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontFamily: Fonts.ROBOTO,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 27,
    paddingTop: 16,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  singleButtonComponent: { height: 48, paddingHorizontal: 50 },
  topContainer: { flex: 1 },
});

export default styles;
