import { StyleSheet } from 'react-native';
import { vh, vw } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  buttonContainer: {
    alignItems: 'space-around',
    flex: 0.4,
    justifyContent: 'center',
  },
  goToButtonText: {
    color: AppTheme.TEXT_COLOR_HEADING_06,
    fontFamily: Fonts.INTER_MEDIUM,
    fontSize: vh(12),
  },
  goToCourseButton: {
    backgroundColor: AppTheme.TEXT_COLOR_HEADING_07,
    borderRadius: 6,
    marginTop: 5,
    minHeight: vh(34),
    padding: 7,
  },
  headingContainer: {
    flex: 0.4,
  },
  headingText: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.INTER_MEDIUM,
    fontSize: vh(16),
    fontWeight: 'bold',
    letterSpacing: 0.2,
  },
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressAndButtonContainer: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressBar: {
    alignItems: 'center',
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  progressBarContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  progressText: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.INTER_LIGHT,
    fontSize: vh(10),
    marginLeft: vw(10),
  },
  subContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
    borderRadius: 5,
    elevation: 5,
    flex: 1,
    marginVertical: 5,
    padding: 10,
    shadowColor: AppTheme.SHADOW_COLOR,
    width: '100%',

  },
});
export default styles;
