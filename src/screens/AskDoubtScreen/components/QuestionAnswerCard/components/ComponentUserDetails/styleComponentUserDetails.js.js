import { StyleSheet } from 'react-native';
import { vh, vw } from '../../../../../../common/Dimensions';
import Fonts from '../../../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  commentCountsColor: {
    color: AppTheme.COLOR_04,
  },
  imageStyle: {
    height: vw(18),
    width: vw(18),
  },
  mainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: '2%',
  },
  nameLogoStyle: {
    alignItems: 'center',
    backgroundColor: AppTheme.ASK_DOUBT_PRIMARY_BACKGROUND_07,
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  nameLogoTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_03,
  },
  questionStatus: {
    flexDirection: 'row',
  },
  resolvedTextColor: {
    color: AppTheme.PRIMARY_COLOR,
  },
  smallCircleStyle: {
    alignSelf: 'center',
    backgroundColor: AppTheme.COLOR_04,
    borderRadius: 3 / 2,
    height: 3,
    marginRight: 5,
    width: 3,
  },
  subContainerOne: {
    alignItems: 'center',
    flex: 0.1,
  },
  subContainerThree: {
    alignItems: 'center',
    backgroundColor: AppTheme.PRIMARY_RED_COLOR,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 6,
    height: vh(24),
    justifyContent: 'center',
    position: 'absolute',
    width: vh(24),
  },
  subContainerTwo: {
    flex: 0.8,
  },
  subHeadingTextStyle: {
    color: AppTheme.COLOR_04,
    fontSize: vh(10),
    fontWeight: '400',
    marginRight: 15,
  },
  textStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontFamily: Fonts.ROBOTO,
    fontSize: vh(14),
    fontWeight: 'bold',
  },
  unResolvedTextColor: {
    color: AppTheme.COLOR_05,
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
