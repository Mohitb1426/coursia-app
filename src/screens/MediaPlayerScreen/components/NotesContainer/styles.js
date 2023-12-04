import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh, vw } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  flatListContainer: {
    marginLeft: 5,
  },
  flatListTitle: {
    color: ColorTheme.APPLE_BLACK,
    fontSize: 15,
    fontWeight: '300',
  },
  imageContainer: { height: vh(24), width: vh(24) },
  inputContainer: {
    color: ColorTheme.APPLE_BLACK,
    fontSize: 14,
  },
  inputMainContainer: {
    backgroundColor: ColorTheme.WHITE,
    borderColor: ColorTheme.NATIVE_LIGHT_GREY,
    borderRadius: 5,
    borderWidth: 0.22,
    height: vh(74),
  },
  noDownloadContainer: {
    alignItems: 'center',
    flex: 0.90,
    justifyContent: 'center',
  },
  noDownloadImage: {
    height: vh(180),
    resizeMode: 'contain',
    width: vw(170),
  },
  notesContainer: { alignSelf: 'flex-end', flexDirection: 'row' },
  notesMainContainer: {
    marginHorizontal: vw(15),
  },
  submitContainer: {
    alignItems: 'center',
    backgroundColor: ColorTheme.LIGHT_GREEN_BG,
    borderRadius: 6,
    borderWidth: 1,
    height: vh(44),
    justifyContent: 'center',
    marginTop: 5,
    margin: '1%',
    width: vh(100),
  },
  submitText: {
    color: ColorTheme.GREEN_BG,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  takeNotesContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  takeNotesText: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.INTER_MEDIUM,
    fontSize: 19,
  },
  videosHeadingStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.INTER_MEDIUM,
    fontSize: 18,
  },

});

export default styles;
