import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  bulletContainer: {
    flexDirection: 'row',
  },
  bulletDesign: {
    backgroundColor: ColorTheme.OLD_SILVER,
    borderRadius: vh(20),
    height: vh(4),
    marginEnd: vw(10),
    marginTop: vh(6),
    width: vw(4),
  },
  courseNameStyle: {
    color: ColorTheme.OLD_SILVER,
    fontSize: vw(10),
    fontWeight: '400',
    marginRight: vw(15),
    maxWidth: vw(100),
  },
  dateStyle: {
    color: ColorTheme.OLD_SILVER,
    fontSize: vw(10),
    fontWeight: '400',
    marginRight: vw(15),
  },
  imageStyle: {
    height: vw(18),
    width: vw(18),
  },
  mainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: vh(70),
    justifyContent: 'space-around',
    // marginTop: vh(10),
  },
  nameLogoStyle: {
    alignItems: 'center',
    backgroundColor: ColorTheme.GREEN_BG,
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  nameLogoTextStyle: {
    color: ColorTheme.WHITE,
  },
  questionStatus: {
    flexDirection: 'row',
  },
  spacerDesign: {
    flex: 1,
  },
  subContainerOne: {
    alignItems: 'center',
    flex: 0.15,
  },
  subContainerThree: {
    alignItems: 'center',
    flex: 0.1,
  },
  subContainerTwo: {
    flex: 0.8,
  },
  subHeadingResolvedStyle: {
    color: ColorTheme.GREEN_BG,
    fontSize: vw(10),
    fontWeight: '400',
  },
  subHeadingTextStyle: {
    color: ColorTheme.OLD_SILVER,
    fontSize: vw(10),
    fontWeight: '400',
    width: vw(100),
  },
  subHeadingUnresolvedStyle: {
    color: ColorTheme.DARK_RED,
    fontSize: vw(10),
    fontWeight: '400',
    marginRight: vw(15),
  },
  textStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontSize: vw(15),
    fontWeight: '500',
  },
  userImageStyle: {
    alignItems: 'center',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
});

export default styles;
