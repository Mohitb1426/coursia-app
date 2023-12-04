import { StyleSheet } from 'react-native';
import { ColorTheme, ColorThemeLight } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  ansWebViewStyle: {
    marginVertical: vw(10),
    paddingHorizontal: vw(10),
  },
  answerContainerStyle: {
    backgroundColor: AppTheme.BACKGROUND_COMMENT,
    borderRadius: vh(5),
    paddingTop: vh(5),
  },
  cardStyles: {
    backgroundColor: ColorTheme.BLUE_58,
    borderRadius: 5,
    marginEnd: vw(5),
    overflow: 'hidden',
    padding: 1,
  },
  mainContainer: {
    backgroundColor: ColorThemeLight.PRIMARY_BACKGROUND,
    flexDirection: 'column',
    flex: 1,
  },
  nameLogoStyle: {
    alignItems: 'center',
    backgroundColor: ColorTheme.OCEAN_GREEN,
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    marginStart: 15,
    width: 40,
  },
  nameLogoTextStyle: {

  },
  renderHtmlContainer: { height: 'auto', width: '100%' },

  subContainerOne: {
    alignItems: 'center',
    flex: 0.15,
  },
  subContainerTwo: {
    flex: 0.75,
    marginStart: 10,
  },

  subContainerZero: {
    alignItems: 'center',
    // flex: 0.5,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-around',
  },

  textStyle2: {
    color: ColorTheme.APPLE_BLACK,
    fontSize: vh(15),
    fontWeight: 'bold',
  },

  textStyle3: {
    color: ColorTheme.OLD_SILVER,
    fontSize: vw(11),
    fontWeight: '400',
  },
  textStyle4: {
    color: ColorTheme.WHITE,
    fontSize: vw(11),
    fontWeight: '500',
    paddingHorizontal: vw(12),
    paddingVertical: 1,
  },
  webStyle: { flex: 1 },
});

export default styles;
