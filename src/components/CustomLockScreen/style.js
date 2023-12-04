import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

const styles = StyleSheet.create({
  absolute: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  backButton: {
    alignItems: 'center',
    height: vw(40),
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    width: vw(50),
  },
  headerView: {
    alignItems: 'center',
    backgroundColor: ColorTheme.WHITE,
    flexDirection: 'row',
    height: vh(60),
    justifyContent: 'center',
    width: '100%',
  },
  header_backButton: {
    height: '50%',
    width: '50%',
  },
  imageContainer: {
    alignItems: 'center',
    flex: 0.7,
    justifyContent: 'center',
  },
  imageSubContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  lockImageStyle: {
    height: vh(126),
    width: vh(125),
  },
  mainContainer: {
    flex: 1,
  },
  modalStyle: {
    margin: 0,
  },
  pullDownBar: {
    height: vh(4),
    width: vh(36),
  },
  secondTextStyle: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.ROBOTO,
    fontSize: 14,
    fontWeight: '400',
    marginBottom: vh(40),
    marginTop: vh(10),
    textAlign: 'center',
  },
  subContainer: {
    alignItems: 'center',
    backgroundColor: ColorTheme.WHITE,
    // borderTopLeftRadius: 25,
    // borderTopRightRadius: 25,
    elevation: 100,
    flex: 0.3,
    padding: 10,
  },
  textStyle: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.ROBOTO,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: vh(15),
  },
});

export default styles;
