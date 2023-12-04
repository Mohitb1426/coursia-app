import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh, vw } from '../../../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 8,
  },
  descriptionContainer: {
    flex: 0.4,
  },
  descriptionText: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.2,
  },
  gradientStyle:
  {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: vh(6),
  },
  heading: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontSize: vh(14),
    fontWeight: 'bold',
  },
  headingContainer: {
    flex: 0.4,
  },
  resumeButton: {
    alignItems: 'center',
    color: ColorTheme.GREEN_BG,
    flexDirection: 'row',
  },
  resumeButtonContainer: {
    alignItems: 'center',
    flex: 0.2,
    marginBottom: 5,
  },
  resumeButtonText: {
    color: ColorTheme.GREEN_BG,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.2,
    marginLeft: 5,
  },
  resumeImage: {
    height: 19,
    width: 19,
  },
  subContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
    borderRadius: 5,
    elevation: 5,
    height: vh(115),
    marginRight: 10,
    shadowColor: ColorTheme.WHITE,
    shadowRadius: 5,
    width: vw(161),
  },
});
export default styles;
