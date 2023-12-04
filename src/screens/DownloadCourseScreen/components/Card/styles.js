import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh, vw } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  flatListContainer: {
    marginLeft: 5,
  },
  flatListTitle: {
    color: ColorTheme.GREY_BG,
    fontFamily: Fonts.INTER_LIGHT,
    fontSize: 12,
  },
  imageContainer: {
    height: vh(13),
    width: vh(13),

  },
  itemContainer: {
    alignItems: 'center',
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
    borderRadius: 5,
    elevation: 5,
    flexDirection: 'row',
    height: vh(70),
    justifyContent: 'space-between',
    marginVertical: 5,
    width: '100%',

  },
  mainTouchableStyle: {
    flex: 0.9,
    flexDirection: 'row',

  },
  marginRight20: { marginRight: 20 },
  otherImageContainer: {
    height: vw(18),
    marginHorizontal: 10,
    marginTop: 2,
    width: vw(18),
  },
  titleContainer: {
    flex: 1,
    marginHorizontal: 2,
  },
  videoChapter: {
    color: AppTheme.TEXT_COLOR_CONTENT_05,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: 13,
    fontWeight: '300',
  },
  videoName: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: 16,
    fontWeight: '400',
  },
});

export default styles;
