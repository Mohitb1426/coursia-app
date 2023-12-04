import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh, vw } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = StyleSheet.create({
  flatListContainer: {
    marginLeft: 5,
  },
  image1Style: {
    height: '100%',
    width: '100%',
  },
  image1_Container: {
    height: vh(88),
    width: '100%',
  },
  image2_mainContainer: {
    alignItems: 'center',
    backgroundColor: ColorTheme.GREEN_BG,
    bottom: 0,
    flexDirection: 'row',
    height: vh(27),
    paddingLeft: '4%',
    position: 'absolute',
    width: '100%',
  },
  image2_textStyle: {
    color: ColorTheme.WHITE,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: 12,
  },
  imageContainer: {
    height: vw(11),
    width: vw(11),
  },
  itemContainer: {
    backgroundColor: ColorTheme.secondary,
    borderRadius: 5,
    height: vh(88),
    marginHorizontal: vw(3),
    overflow: 'hidden',
    width: vh(144),
  },
  titleContainer: {
    flex: 1,
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
