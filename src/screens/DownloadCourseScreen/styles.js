import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  customButtonCustomStyle: {
    borderRadius: 6,
    height: vh(54),
    marginTop: vh(10),
    width: '100%',
  },
  dividerHeader: {
    backgroundColor: AppTheme.DIVIDER_COLOR_01,
    height: 1,
  },
  flatListContainer: {
    flex: 1,
    marginLeft: 5,
  },
  flatListTitle: {
    color: AppTheme.TEXT_COLOR_CONTENT_01,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(15),
    fontWeight: '300',
    marginVertical: vh(7),
  },
  headerText: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.INTER_MEDIUM,
    fontSize: vh(19),
    fontWeight: '600',
  },
  headerView: {
    alignItems: 'center',
    flexDirection: 'row',
    height: vh(60),
    justifyContent: 'center',
    width: '100%',
  },
  imageContainer: {
    marginHorizontal: 10,
  },
  imageContainer1: {
  },
  itemContainer: {
    alignItems: 'center',
    backgroundColor: ColorTheme.light01,
    borderRadius: 5,
    flexDirection: 'row',
    height: vh(70),
    marginVertical: 5,
    width: '100%',
  },
  mainContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_13,
    flex: 1,
    padding: vh(8),
  },
  noDownloadContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  noDownloadImage: {
    height: vh(180),
    paddingBottom: vh(30),
    paddingTop: vh(50),
    resizeMode: 'contain',
    width: vw(170),
  },
  sectionListStyle: {
    flex: 1,
  },
  storage: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(24),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  storagePath: {
    color: AppTheme.TEXT_COLOR_CONTENT_05,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(17),
    fontWeight: '400',
    marginHorizontal: 10,
    marginTop: vh(50),
    textAlign: 'center',
  },
  titleContainer: {
    flex: 1,
    marginHorizontal: 2,
  },
  videoChapter: {
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: 13,
    fontWeight: '300',
  },
  videoName: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: 16,
    fontWeight: '400',
  },
});
export default styles;
