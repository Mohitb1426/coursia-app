import { StyleSheet } from 'react-native';
import Fonts from '../../../../common/Fonts';
import { vh } from '../../../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  activeTextColor: {
    color: AppTheme.TEXT_COLOR_HEADING_03,
  },
  buttonStyleOne: {
    alignItems: 'center',
    backgroundColor: AppTheme.ASK_DOUBT_PRIMARY_BACKGROUND_07,
    borderRadius: 6,
    flex: 0.5,
    height: vh(40),
    justifyContent: 'center',
    margin: vh(9),
  },
  buttonStyleTwo: {
    alignItems: 'center',
    flex: 0.5,
    height: vh(40),
    justifyContent: 'center',
    margin: vh(9),
  },
  inactiveTextColor: {
    color: AppTheme.TEXT_COLOR_HEADING,
  },
  mainContainer: {
    alignSelf: 'center',
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_04,
    borderRadius: 6,
    flexDirection: 'row-reverse',
    height: vh(60),
    marginHorizontal: vh(10),
  },
  textStyle: {
    fontFamily: Fonts.ROBOTO,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
