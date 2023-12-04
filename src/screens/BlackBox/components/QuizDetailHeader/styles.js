import { StyleSheet } from 'react-native';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 25,
    width: '100%',
  },
  marksContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  marksDetailContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  marksTextStyle: (type) => {
    // eslint-disable-next-line no-nested-ternary
    const textColor = type === 'correct'
      ? AppTheme.PRIMARY_COLOR : type === 'wrong'
        ? AppTheme.PRIMARY_RED_COLOR : AppTheme.TEXT_COLOR_CONTENT_02;
    return {
      color: textColor,
      fontFamily: Fonts.ROBOTO,
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 24,
      paddingLeft: 3,
      paddingRight: 10,
    };
  },
  quesCountContainer: { flex: 1 },
  quesTextStyle: {
    color: AppTheme.TEXT_COLOR_CONTENT_02,
    fontFamily: Fonts.ROBOTO,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
  },
});

export default styles;
