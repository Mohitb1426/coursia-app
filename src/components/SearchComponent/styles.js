import { StyleSheet, Dimensions } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { vw, vh } from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  ImageStyle: {
    height: vh(19),
    width: vw(15),
  },
  Image_Container: {
    alignItems: 'center',
    backgroundColor: ColorTheme.WHITE,
    borderRadius: 4,
    height: vh(50),
    justifyContent: 'center',
    width: vw(30),
  },
  inputTextContainer: {
    flex: 1,
    maxHeight: vh(199),
    zIndex: 1,
  },
  itemStyle: {
    padding: 5,
  },
  itemTextStyle: {
    color: ColorTheme.NATIVE_GREY,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(14),
  },
  mainContainerStyle: {
    alignItems: 'center',
    marginBottom: '15%',
    zIndex: 2,
  },
  subContainerStyle: {
    backgroundColor: ColorTheme.WHITE,
    borderColor: ColorTheme.NATIVE_GREY,
    borderRadius: 4,
    borderWidth: 0.5,
    flexDirection: 'row',
    marginBottom: '2%',
    position: 'absolute',
    width: width * 0.75,
    zIndex: 2,
  },
  textInputStyle: {
    backgroundColor: ColorTheme.WHITE,
    borderRadius: 4,
    color: ColorTheme.NATIVE_GREY,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(14),
    height: vh(50),
  },
});

export default styles;
