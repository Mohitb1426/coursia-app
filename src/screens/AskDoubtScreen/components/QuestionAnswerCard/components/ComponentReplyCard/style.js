import { StyleSheet } from 'react-native';
import Fonts from '../../../../../../common/Fonts';
import { vh, vw } from '../../../../../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  buttonStyle: {
    alignItems: 'flex-end',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageStyle: {
    backgroundColor: AppTheme.TEXT_COLOR_HEADING_03,
    borderRadius: 19,
    height: vh(38),
    marginRight: vw(8),
    width: vh(38),
  },
  mainContainer: {
    backgroundColor: AppTheme.ASK_DOUBT_PRIMARY_BACKGROUND_08,
    borderRadius: 10,
    flex: 1,
    padding: 15,
  },
  mentorNameStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontFamily: Fonts.ROBOTO,
    fontSize: 8,
    fontWeight: 'bold',
    marginBottom: vh(1),
  },
  mentorResponseTime: {
    color: AppTheme.COLOR_04,
    fontFamily: Fonts.ROBOTO,
    fontSize: 6,
    fontWeight: '400',
  },
  secondSubContainer: {
    justifyContent: 'center',
  },
  subContainer: {
    flexDirection: 'row',
  },
  textContainerStyle: {
    alignItems: 'center',
    borderColor: AppTheme.LINER_GRADIENT_COLOR_1,
    borderRadius: 30,
    borderWidth: 0.1,
    height: vh(14),
    justifyContent: 'center',
    width: vw(49),
  },
  textStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_03,
    fontFamily: Fonts.ROBOTO,
    fontSize: 6,
    fontWeight: '500',
  },
});

export default styles;
