import { StyleSheet } from 'react-native';
import { ColorTheme, ColorThemeLight } from '../../../../common/AppStyles';
import { vw, screenWidthDefault } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = StyleSheet.create({
  horizontalRule: {
    alignSelf: 'stretch',
    borderBottomColor: ColorTheme.LIGHT_WHISPER_COLOR,
    borderBottomWidth: 1,
  },
  horizontalRuleSelected: {
    alignSelf: 'stretch',
    borderBottomColor: ColorTheme.GREEN_BG,
    borderBottomWidth: 0.5,
  },
  imageContainer: {
    margin: 15,
  },
  imageStyle: {},
  mainContainer: {
    alignItems: 'center',
    backgroundColor: ColorTheme.WHITE,
    borderRadius: 8,
    elevation: 5,
    height: 155,
    justifyContent: 'center',
    shadowColor: ColorTheme.BLACK_1,
    shadowRadius: 3,
    width: screenWidthDefault / 2 - 25,
  },

  mainContainerSelected: {
    alignItems: 'center',
    backgroundColor: ColorTheme.backgroundGreen,
    borderColor: ColorTheme.GREEN_BG,
    borderRadius: 8,
    borderWidth: 1,
    elevation: 5,
    flex: 1,
    height: 155,
    justifyContent: 'center',
    shadowColor: ColorTheme.backgroundGreen,
    shadowRadius: 3,
    width: screenWidthDefault / 2 - 25,
  },
  subtitle: {
    alignSelf: 'center',
    color: ColorTheme.BACKGROUND_QUATERNARY_EMPHASIS,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(10),
    fontWeight: '700',
  },
  textContainer: {
    paddingHorizontal: 8,
    paddingVertical: 14,
  },
  title: {
    alignSelf: 'center',
    color: ColorThemeLight.TEXT_COLOR_HEADING,
    fontSize: vw(16),
    fontWeight: '700',
    padding: 2,
  },
});

export default styles;
