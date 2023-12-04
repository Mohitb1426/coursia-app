import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../common/AppStyles';
import { screenHeightDefault, vh, vw } from '../../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  bookmarkIconStyle: {
    alignItems: 'center',
    backgroundColor: ColorTheme.WHITE,
    borderRadius: vh(8),
    bottom: vh(60),
    height: vh(30),
    justifyContent: 'center',
    padding: vh(8),
    position: 'absolute',
    right: vw(14),
    width: vw(30),
  },
  buttonTextStyle: {
    fontSize: 14,
    fontWeight: '700',
  },
  cardContainerStyle: {
    flex: 1,
  },
  contentStyle: {
    color: AppTheme.TEXT_COLOR_CONTENT_04,
    fontSize: vw(15),
    fontWeight: '400',
    marginBottom: 10,
    marginHorizontal: vw(16),
    textAlign: 'justify',
  },
  customButtonCustomStyle: {
    alignItems: 'center',
    borderRadius: 5,
    fontWeight: '500',
    justifyContent: 'center',
    minHeight: 40,
    width: '35%',
  },
  flatListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: vw(10),
    marginVertical: vh(16),
  },
  innerScrollViewContainer: {
    justifyContent: 'center',
  },
  mainContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
    borderBottomWidth: 1,
    borderColor: AppTheme.PRIMARY_BACKGROUND_03,
    borderRadius: 8,
    borderWidth: 1,
    elevation: 5,
    height: screenHeightDefault * 0.79,
  },
  removedToastStyle: {
    backgroundColor: ColorTheme.LIGHT_RED,
    borderRadius: 8,
  },
  scrollViewStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  shareIconStyle: {
    alignItems: 'center',
    backgroundColor: ColorTheme.WHITE,
    borderRadius: vh(8),
    bottom: vh(14),
    height: vh(30),
    justifyContent: 'center',
    padding: vh(8),
    position: 'absolute',
    right: vw(14),
    width: vw(30),
  },
  subTextContainer: {
    flex: 0.89,
    paddingBottom: 10,
  },
  subjectStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontSize: vw(17),
    fontWeight: '700',
    marginHorizontal: vw(16),
    textAlign: 'justify',
  },
  textContainer: {
    marginVertical: 10,
  },
  toastContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 220,
  },
  toastStyle: {
    backgroundColor: ColorTheme.GREEN_BG,
    borderRadius: 8,
  },
  toastTextContainer: {
    color: AppTheme.PRIMARY_BACKGROUND,
    fontSize: 14,
  },
  toastTextSubContainer: {
    fontWeight: '600',
  },
  topImageStyle: {
    backgroundColor: ColorTheme.grey,
    borderRadius: vh(6),
    height: vh(165),
  },
  verandaLogoStyle: {
    alignItems: 'center',
    backgroundColor: ColorTheme.WHITE,
    borderRadius: vh(8),
    bottom: vh(10),
    height: vh(30),
    justifyContent: 'center',
    left: vw(14),
    padding: vh(8),
    position: 'absolute',
    width: vw(100),
  },
});

export default styles;
