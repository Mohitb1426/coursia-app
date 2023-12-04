import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

const styles = StyleSheet.create({
  Container: {
    flex: 0.6,
  },
  TextContainer: {
    alignItems: 'center',
    flex: 0.8,
    justifyContent: 'center',
  },
  VersionTextContainer: {
    alignItems: 'center',
    flex: 0.1,
    justifyContent: 'center',
  },
  VersionTextStyle: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.OPEN_SANS_REGULAR,
    fontSize: vh(12),
    fontWeight: '300',
  },
  backButton: {
    alignItems: 'center',
    height: vw(40),
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    width: vw(50),
  },
  headerText: {
    color: ColorTheme.APPLE_BLACK,
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
    height: vh(15),
    width: vw(20),
  },
  mainContainer: {
    backgroundColor: ColorTheme.LIGHT_BACKGROUND,
    flex: 1,
  },
});

export default styles;
