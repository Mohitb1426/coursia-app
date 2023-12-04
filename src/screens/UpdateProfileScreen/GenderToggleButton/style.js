import { StyleSheet } from 'react-native';
import { ColorTheme, ColorThemeLight } from '../../../common/AppStyles';
import { vh, vw } from '../../../common/Dimensions';

const styles = StyleSheet.create({
  activeTextColor: {
    color: ColorTheme.WHITE,
  },
  genderTextStyle: {
    color: ColorThemeLight.TEXT_COLOR_HEADING,
    fontSize: vh(15),
    fontWeight: '500',
    marginHorizontal: vw(18),
  },
  inactiveTextColor: {
    color: ColorTheme.APPLE_BLACK,
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: vh(10),
  },
  singleItem: {
    alignItems: 'center',
    borderColor: ColorTheme.LIGHT_WHISPER_COLOR,
    borderRadius: vh(6),
    borderWidth: 1,
    flexDirection: 'row',
    flex: 0.5,
    height: vh(70),
    paddingHorizontal: vw(25),
  },
  spacer: {
    flex: 1,
  },
});

export default styles;
