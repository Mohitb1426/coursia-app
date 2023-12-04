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
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
  },
  dividerHeader: {
    backgroundColor: ColorTheme.GREY_LIGHT_DIVIDER,
    height: vh(1),
    width: vw(368),
  },
  dividerTab: {
    backgroundColor: ColorTheme.GREY_LIGHT_DIVIDER,
    height: vh(2),
    width: vw(368),
  },
  flatListContainer: {
    flex: 1,
  },
  imageStyle: {
    height: vh(48),
    width: vw(368),
  },
  seperatorLine: {
    backgroundColor: AppTheme.BORDER_COLOR,
    flex: 1,
    height: 1,
    marginHorizontal: vh(8),
  },
  styleContainerImage: {
    alignItems: 'center',
    flex: 0.45,
    justifyContent: 'flex-end',
  },
  textContainer: {
    alignItems: 'center',
    flex: 0.35,
    justifyContent: 'center',
  },
  textStyle: {
    color: ColorTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vw(14),
    marginTop: vh(20),
    textAlign: 'center',
  },
  title: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.INTER_MEDIUM,
    fontSize: vw(14),
    lineHeight: vh(27),
    marginTop: vh(15),
  },
});

export default styles;
