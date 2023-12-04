import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

export const Style = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: ColorTheme.WHITE,
    borderBottomWidth: 0.5,
    borderColor: ColorTheme.APPLE_BLACK,
    flexDirection: 'row',
    height: vh(50),
    justifyContent: 'space-between',
    marginBottom: vh(15),
    width: vw(340),
  },
  errorStyle: {
    borderColor: ColorTheme.ERROR_RED,
    color: ColorTheme.ERROR_RED,
  },
  errorText: {
    color: ColorTheme.ERROR_RED,
    fontFamily: Fonts.LATO_REGULAR,
    fontSize: vw(11),
    fontWeight: '600',
    marginBottom: vh(10),
    marginTop: vh(-10),
    // marginLeft: vw(12),
    textAlign: 'left',
  },
  inputTextHeading: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vw(12),
    marginTop: vh(10),
    textAlign: 'left',
  },
  prefixStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.LATO_SEMIBOLD,
    fontSize: vw(16),
    fontWeight: '600',
    justifyContent: 'center',
  },
  textDescription: {
    fontSize: vw(12),
    marginBottom: vh(8),
    textAlign: 'left',
    width: vw(282),
  },
  textInput: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.LATO_SEMIBOLD,
    fontSize: vw(16),
    fontWeight: '600',
    // marginTop: vh(2),
    textAlign: 'left',
    width: vw(281),
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInputLabel: {
    fontSize: vw(14),
    justifyContent: 'flex-end',
    marginTop: vh(13),
    textAlign: 'left',
  },
});

export default Style;
