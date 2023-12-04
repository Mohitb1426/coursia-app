import { StyleSheet, Dimensions } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import Fonts from '../../../../common/Fonts';
import { vh } from '../../../../common/Dimensions';

const { width } = Dimensions.get('window');

const styles = (AppTheme) => StyleSheet.create({
  headerContainer: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainContainer: {
    justifyContent: 'space-between',
    marginBottom: vh(10),
    minHeight: vh(35),
  },
  progressBarInnerView: {
    backgroundColor: ColorTheme.GREEN_BG,
    height: vh(2),
  },
  progressBarOuterView: {
    backgroundColor: ColorTheme.QUIZ_PROGRESS_BAR_COLOR_1,
    height: vh(2),
    width,
  },
  textStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(18),
    fontWeight: '500',
  },
});

export default styles;
