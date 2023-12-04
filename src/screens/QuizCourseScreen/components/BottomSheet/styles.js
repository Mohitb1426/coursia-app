/* eslint-disable react-native/sort-styles */
import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh, vw } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  buttonStyle: {
    height: 50,
    width: 370,
    backgroundColor: ColorTheme.GREEN_BG,
  },
  bottomSheetHeaderImage: {
    alignItems: 'center',
    padding: 10,
  },
  container: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
    flex: 1,
    justifyContent: 'space-between',
    padding: vh(20),
  },
  customButton: {
    flex: 0.3,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  dividerStyle: {
    backgroundColor: AppTheme.DIVIDER_COLOR_01,
    height: 1,
    width: '100%',
  },
  firstContainerStyle: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flatListItems: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    borderColor: AppTheme.BORDER_COLOR,
    borderWidth: 2,
    height: 25,
    justifyContent: 'space-around',
    marginRight: 10,
    marginVertical: 15,
    width: 100,
    paddingHorizontal: 6,
  },
  flatListGreenItems: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: ColorTheme.GREEN_BG,
    borderColor: ColorTheme.GREEN_BG,
    height: 25,
    justifyContent: 'space-around',
    marginRight: 10,
    marginVertical: 15,
    width: 100,
    paddingHorizontal: 6,
  },
  flatListGreenText: {
    color: ColorTheme.WHITE,
    fontSize: vw(11),
    fontWeight: '400',
  },
  flatListText: {
    color: AppTheme.TEXT_COLOR_CONTENT_05,
    fontSize: vw(11),
    fontWeight: '400',
  },
  flatListView: {
    flex: 1,
  },
  headingText: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(17),
    fontWeight: '700',
  },
  imageStyle: {
    backgroundColor: ColorTheme.GREEN_BG,
    position: 'absolute',
    right: 2,
  },
  mainContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  secondContainer: {
    flex: 0.2,
    marginTop: 15,
  },
  subHeadingText: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(14),
    fontWeight: '700',
  },
  thirdContainer: {
    flex: 0.2,
    marginTop: 15,
  },
});

export default styles;
