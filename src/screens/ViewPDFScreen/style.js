import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  backButton: {
    alignItems: 'center',
    height: vw(40),
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    width: vw(50),
  },
  bgTransparent: { backgroundColor: ColorTheme.TRANSPARENT },
  buttonStyle: {
    alignItems: 'center', height: vh(40), justifyContent: 'center', width: vh(40),
  },
  container: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
  },
  headerText: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.INTER_MEDIUM,
    fontSize: vh(18),
    lineHeight: vh(41),
  },
  headerView: {
    alignItems: 'center',
    flexDirection: 'row',
    height: vh(60),
    justifyContent: 'center',
    width: '100%',
  },
  header_backButton: {
    height: vw(20),
    width: vw(20),
  },
  pdfStyle: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
  },
  titleNameContainer: {
    alignItems: 'center',
    flex: 0.8,
    justifyContent: 'center',
  },
});

export default styles;
