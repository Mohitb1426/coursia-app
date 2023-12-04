import { StyleSheet } from 'react-native';
import { vh, vw } from '../../../../../../common/Dimensions';
import Fonts from '../../../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  postedIconImageStyle: {
    height: vh(20),
    width: vw(20),
  },

  postedProgressBarContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    flex: 0.95,
  },
  progressBarContainer: {
    flex: 1,
  },
  progressLine: {
    alignSelf: 'center',
    height: vh(2),
    width: vw(122),
  },
  progressLineOneColor: {
    backgroundColor: AppTheme.ASK_DOUBT_SECONDARY_SUB_COLOR_04,
  },
  progressLineTwoColor: {
    backgroundColor: AppTheme.BAR_COLOR,
  },
  shadowStyle: {
    alignItems: 'center',
    borderRadius: 20.5,
    height: 41,
    justifyContent: 'center',
    width: 41,
  },
  textContainer: {
    // alignSelf: 'center',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  textStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontFamily: Fonts.ROBOTO,
    fontSize: 10,
    fontWeight: '400',
  },
});

export default styles;
