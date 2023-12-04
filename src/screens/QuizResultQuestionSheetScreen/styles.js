import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import Fonts from '../../common/Fonts';
import { vh, vw } from '../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  backButton: {
    alignItems: 'center',
    height: vw(40),
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    width: vw(50),
  },
  bullet: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: ColorTheme.LIGHT_GREEN,
    borderRadius: 6,
    borderWidth: 0,
    height: vh(40),
    marginLeft: vw(16),
    width: vw(156),
  },
  checkboxTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: 16,
    fontWeight: '400',
  },
  container: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
  },
  headerText: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.INTER_SEMI_BOLD,
    fontSize: vh(18),
    fontStyle: 'normal',
    fontWeight: '500',
    marginHorizontal: vw(50),
  },
  headerView: {
    alignItems: 'center',
    flexDirection: 'row',
    height: vh(60),
    width: '100%',
  },
  header_backButton: {
    height: vh(24),
    width: vw(24),
  },
  loaderContainer: { alignItems: 'center', flex: 1, justifyContent: 'center' },
  questionStatusComponent: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: vw(16),
    paddingVertical: vh(25),
  },
  questionStatusLabel: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  roundStatus: {
    borderRadius: 24 / 2,
    height: 24,
    marginRight: 4,
    width: 24,
  },
  scrollViewContainer: {
    flex: 1,
    margin: vh(10),
  },
  statusTextStyle: {
    fontFamily: Fonts.INTER_SEMI_BOLD,
    fontSize: vh(12),
    lineHeight: vh(41),
  },
  textStyle: {
    color: ColorTheme.black,

  },
  tickBoxStyle: {
    height: vh(20),
    width: vw(15),
  },
  viewInstructionsButtonTextStyle: {
    fontFamily: Fonts.INTER_BOLD,
    fontSize: vh(16),
    marginRight: vw(17),
  },
});

export default styles;
