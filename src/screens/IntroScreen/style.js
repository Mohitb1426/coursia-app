import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    flex: 0.2,
    justifyContent: 'flex-start',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: ColorTheme.GREEN_BG,
    borderRadius: 12,
    height: vh(58),
    justifyContent: 'center',
    width: vw(153),
  },
  buttonText: {
    color: ColorTheme.WHITE,
    fontFamily: Fonts.INTER_BOLD,
    fontSize: vw(16),
  },
  container: {
    flex: 1,
  },
  imageStyle: {
    height: vh(48),
    width: vw(368),
  },
  styleContainerImage: {
    alignItems: 'center',
    flex: 0.45,
    justifyContent: 'flex-end',
  },
  svgContainer: {
    alignItems: 'center',
    backgroundColor: ColorTheme.WHITE,
    borderRadius: 8,
    height: vh(66),
    justifyContent: 'center',
    width: vw(298),
  },
  textContainer: {
    alignItems: 'center',
    flex: 0.35,
    justifyContent: 'center',
  },
  textStyle: {
    color: ColorTheme.WHITE,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vw(14),
    fontWeight: '500',
    marginTop: vh(20),
    textAlign: 'center',
  },
  title: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.INTER_MEDIUM,
    fontSize: vw(14),
    fontWeight: 'bold',
    lineHeight: vh(27),
    marginTop: vh(15),
    textAlign: 'center',
  },
});

export default styles;
