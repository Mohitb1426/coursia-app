import { StyleSheet } from 'react-native';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  ansTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontFamily: Fonts.ROBOTO,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
  },
  container: {
    alignItems: 'center',
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
    borderColor: AppTheme.BORDER_COLOR,
    borderRadius: 6,
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 12,
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 12,
  },
});

export default styles;
