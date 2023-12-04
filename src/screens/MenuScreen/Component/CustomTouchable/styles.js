import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh, vw } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = StyleSheet.create({
  ImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: vw(100),
  },
  ImageStyle: {
    height: vh(21),
    resizeMode: 'contain',
    width: vw(23.52),
  },
  Text: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.OPEN_SANS_REGULAR,
    fontSize: vh(16),
    fontWeight: '400',
  },
  TextContainer: {
    justifyContent: 'center',
    width: vw(280),
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  mainContainer: {
    backgroundColor: ColorTheme.WHITE,
    borderRadius: 5,
    elevation: 2,
    height: vh(70),
    justifyContent: 'center',
    marginBottom: vh(5),
  },
});
export default styles;
