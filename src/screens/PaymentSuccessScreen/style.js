import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import Fonts from '../../common/Fonts';
import { vh, vw } from '../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: vh(20),
  },
  buttonStyle: {
    borderColor: ColorTheme.GREEN_BG,
    borderRadius: 6,
    width: '100%',
  },
  firstInfoContainerStyle: {
    borderBottomColor: ColorTheme.LIGHT_WHISPER_COLOR,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: vh(8),
  },
  headingStyle: {
    alignSelf: 'center',
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.ROBOTO,
    fontSize: vh(24),
    fontWeight: 'bold',
    marginTop: vh(20),
  },
  infoContainerStyle: {
    marginVertical: vh(25),
  },
  leftTextStyle: {
    color: ColorTheme.BACKGROUND_QUATERNARY_EMPHASIS,
    fontFamily: Fonts.ROBOTO,
    fontSize: vh(14),
    fontWeight: 'bold',
  },
  mainContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
  },
  rightTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.ROBOTO,
    fontSize: vh(14),
    fontWeight: 'bold',
  },
  secondInfoContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: vh(8),
  },
  subContainer: {
    flex: 0.5,
    marginHorizontal: vw(15),
  },
  subHeadingContainer: {
    alignSelf: 'center',
    borderBottomColor: ColorTheme.LIGHT_WHISPER_COLOR,
    borderBottomWidth: 1,
    padding: vh(15),
    width: '100%',
  },
  subHeadingStyle: {
    alignSelf: 'center',
    color: ColorTheme.BACKGROUND_QUATERNARY_EMPHASIS,
    fontFamily: Fonts.ROBOTO,
    fontSize: vh(16),
    fontWeight: '400',
  },
  svgContainer: {
    alignItems: 'center',
    backgroundColor: ColorTheme.ALICE_BLUE,
    flex: 0.5,
    justifyContent: 'flex-end',
  },
  transactionTextStyle: {
    alignSelf: 'center',
    color: ColorTheme.GREEN_BG,
    fontFamily: Fonts.ROBOTO,
    fontSize: vh(14),
    fontWeight: 'bold',
    marginTop: vh(10),
  },
});

export default styles;
