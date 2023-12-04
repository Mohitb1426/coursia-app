import { StyleSheet } from 'react-native';
// import { ColorTheme } from '../../common/AppStyles';
// import { ColorTheme } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  backButton: {
    alignItems: 'center',
    height: vw(13),
    justifyContent: 'center',
    width: vw(13),
  },
  container: {
    paddingHorizontal: vw(15),
  },
  headerText: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.INTER_SEMI_BOLD,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 41,
    paddingLeft: '5%',
  },
  headerView: {
    alignItems: 'center',
    flexDirection: 'row',
    height: vh(60),
    // justifyContent: 'center',
    width: '100%',
  },
  header_backButton: {
    height: vh(15),
    width: vw(20),
  },
  leftText: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontSize: vh(17),
    fontWeight: '600',
    justifyContent: 'center',
    lineHeight: vh(41),
    marginStart: vw(20),
  },
  logoStyle: {
    height: vh(36),
    marginLeft: vh(20),
    width: vw(136),
  },
  svgLogo: {
    marginLeft: vh(20),
  },
});

export default styles;
