import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

const styles = StyleSheet.create({
  TextStyle: {
    alignItems: 'center',
    flex: 0.8,
    justifyContent: 'center',
  },
  backButton: {
    alignItems: 'center',
    height: vw(40),
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    width: vw(50),
  },
  callDetailsContainer: {
    backgroundColor: ColorTheme.WHITE,
    borderRadius: 5,
    elevation: 10,
    marginTop: vh(20),
    width: vw(333),
  },
  callTextStyle: {
    alignItems: 'center',
    backgroundColor: ColorTheme.WHITE,
    borderBottomColor: ColorTheme.APPLE_BLACK,
    borderBottomWidth: 0.5,
    height: vh(80),
    justifyContent: 'center',
    marginHorizontal: vh(15),
  },
  centerItem: { alignItems: 'center' },
  contactText: { justifyContent: 'center' },
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
  imageContainer: {
    alignItems: 'center',
    backgroundColor: ColorTheme.WHITE,
    borderRadius: 5,
    justifyContent: 'center',
    width: vw(60),
  },
  mainContainer: {
    backgroundColor: ColorTheme.LIGHT_BACKGROUND,
    flex: 1,
  },
  mainSubTextContainer: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vw(14),
  },
  mainTextContainer: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.INTER_LIGHT,
    fontSize: vw(12),
  },
  textContainer: {
    backgroundColor: ColorTheme.WHITE,
    borderRadius: 5,
    elevation: 5,
    flexDirection: 'row',
    paddingVertical: '1%',
    width: vw(333),
  },
  textImageContainer: {
    backgroundColor: ColorTheme.WHITE,
    borderRadius: 5,
    flexDirection: 'row',
    height: vh(80),
    width: vw(333),
  },
  textSubContainer: {
    alignItems: 'center',
    backgroundColor: ColorTheme.WHITE,
    justifyContent: 'center',
    width: vw(60),
  },
});

export default styles;
