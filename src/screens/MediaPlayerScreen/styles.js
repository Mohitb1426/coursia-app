import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  backButton: {
    alignItems: 'center',
    height: vw(40),
    justifyContent: 'center',
    left: 0,
    width: vw(50),
  },
  backgroundVideo: {
    height: '100%',
    width: '100%',
  },
  contentStyle: {
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    marginHorizontal: vw(10),
  },
  featureComponentContainer: {
    height: vh(67),
    marginTop: vh(10),
    width: '100%',
  },
  headerText: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.INTER_MEDIUM,
    fontSize: vh(18),
    lineHeight: vh(41),
  },
  headerView: {
    alignItems: 'center',
    backgroundColor: ColorTheme.LIGHT_GREY_E5,
    flexDirection: 'row',
    height: vh(60),
    width: '100%',
  },
  header_backButton: {
    height: vw(20),
    width: vw(20),
  },
  imageContainer: {
    marginHorizontal: 10,
  },
  imageShowContainer: {
    height: vh(24),
    width: vh(24),
  },
  mainContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
  },
  mainVideoContainer: {
    height: vh(253),
    width: '100%',
  },
  moduleStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.INTER_BOLD,
    fontSize: 20,
  },

  notePadFull: {
    height: '100%',
  },
  notePadHalf: {
    height: vh(359),
  },
  notesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: vh(10),
  },
  notesFlatListContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
    borderColor: AppTheme.BORDER_COLOR,
    borderRadius: 5,
    borderWidth: 0.52,
    maxHeight: vh(200),
    width: '100%',
  },
  notesStyles: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.INTER_MEDIUM,
    fontSize: 19,
    fontWeight: '600',
  },
  showNoteMainContainer: {
    flexGrow: 1,
  },
  subContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
  },
  takeNotesContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    color: ColorTheme.NATIVE_LIGHT_GREY,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: 10,
    marginHorizontal: '2%',
    marginTop: '1%',
  },
  unitStyle: {
    color: AppTheme.TEXT_COLOR_CONTENT_04,
    fontFamily: Fonts.INTER_MEDIUM,
    fontSize: 14,
  },
  videosHeadingStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.INTER_MEDIUM,
    fontSize: 18,
    marginBottom: '2%',
    marginTop: '4%',
  },
});

export default styles;
