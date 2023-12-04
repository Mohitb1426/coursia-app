import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  backButtonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '30%',
  },
  buttonContainer: {
    flex: 0.15,
  },
  buttonStyle: {
    borderRadius: 6,
    height: vh(48),
    width: '100%',
  },
  cardContainer: {
    paddingHorizontal: vh(20),
  },
  clockImage: {
    height: vh(37),
    width: vh(37),
  },
  container: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
  },
  headerText: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(18),
    fontWeight: '500',
    paddingLeft: vh(30),
  },
  headingTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(16),
    fontWeight: '700',
  },
  instructionsContainer: {
    flex: 1,
    marginHorizontal: vw(20),
  },
  mainHeader: {
    flexDirection: 'row',
    height: vh(70),
    justifyContent: 'space-between',
    width: '100%',
  },
  subContainer: {
    flex: 0.1,
    justifyContent: 'center',
  },
  textContainer: {
    flex: 0.8,
  },
  textStyle: {
    color: AppTheme.TEXT_COLOR_CONTENT_05,
    fontSize: vh(16),
    fontWeight: '400',
    paddingBottom: vh(18),
  },
  timerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '35%',
  },
  timerText: {
    color: ColorTheme.NATIVE_LIGHT_GREY,
    fontSize: vh(16),
    fontWeight: '500',
    paddingLeft: vh(15),
  },
});

export default styles;
