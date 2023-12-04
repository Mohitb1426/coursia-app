import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../../common/AppStyles';
import { vh } from '../../../../../common/Dimensions';
import Fonts from '../../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  chooseTextOneStyle: {
    alignSelf: 'center',
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.ROBOTO,
    fontSize: vh(14),
    fontWeight: '500',
    marginTop: vh(20),
  },
  chooseTextTwoStyle: {
    alignSelf: 'center',
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.ROBOTO,
    fontSize: vh(14),
    fontWeight: '500',
    marginBottom: vh(25),
    marginTop: vh(2),
  },
  container: {
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: ColorTheme.NEW_JUNGLE_GREEN,
    borderRadius: 6,
    height: vh(48),
    justifyContent: 'center',
    width: vh(48),
  },
  imageStyleOne: {
    height: vh(24),
    width: vh(20),
  },
  imageStyleTwo: {
    height: vh(30),
    width: vh(30),
  },
  mainContainer: {
    color: ColorTheme.WHITE,
    flex: 1,
    padding: 10,
  },
  pullDownBar: {
    alignSelf: 'center',
    height: vh(4),
    width: vh(36),
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.ROBOTO,
    fontSize: vh(14),
    fontWeight: 'bold',
    marginVertical: vh(10),
  },
});

export default styles;
