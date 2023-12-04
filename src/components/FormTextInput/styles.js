import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';

export const styles = (AppTheme) => StyleSheet.create({
  backgroundBorderStyle: {
    borderColor: AppTheme.BORDER_COLOR,
  },
  backgroundQuaternaryEmphasis: {
    color: AppTheme.BACKGROUND_QUATERNARY_EMPHASIS,
  },
  clickItemStyle: {
    marginTop: 0,
  },
  errorRed: {
    borderColor: ColorTheme.ERROR_RED,
  },
  errorText: { alignSelf: 'stretch', color: ColorTheme.ERROR_RED, fontSize: vh(10) },
  horizontalContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  innerContainer: {},
  input: {
    color: AppTheme.TEXT_COLOR_HEADING,
    flex: 1,
    fontSize: vw(14),
    fontWeight: '500',
    marginTop: vh(-5),
  },
  inputText: {
    color: AppTheme.TEXT_COLOR_HEADING,
    flex: 1,
    fontSize: vw(14),
    fontWeight: '500',
    marginTop: vh(7),
  },
  inputTextContainer: {
    flex: 1,
    height: vh(38),
  },
  outerContainer: {
    borderColor: AppTheme.BORDER_COLOR,
    borderRadius: vh(6),
    borderWidth: vw(1),
    height: vh(70),
    marginTop: vh(10),
    marginVertical: vh(5),
    paddingBottom: vw(5),
    paddingHorizontal: vw(15),
    paddingTop: vh(10),
    width: '100%',
  },
  preTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontSize: vw(14),
    fontWeight: '500',
    marginEnd: vw(10),
    marginTop: vh(-7),
  },
  textColorHeading: {
    color: AppTheme.TEXT_COLOR_HEADING,
  },
  topTextStyle: {
    color: AppTheme.PLACE_HOLDER_COLOR_01,
    fontSize: vw(10),
    fontWeight: '400',
    marginStart: 3,
  },
});
