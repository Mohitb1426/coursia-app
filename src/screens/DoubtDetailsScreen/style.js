import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: ColorTheme.PLATINUM_COLOR,
    borderRadius: 16,
    height: vw(20),
    justifyContent: 'center',
    marginRight: vw(10),
    minWidth: vw(118),
    paddingHorizontal: vw(10),
  },
  buttonTextStyle: {
    color: ColorTheme.NOTE_TEXT_COLOR,
    fontFamily: Fonts.ROBOTO,
    fontSize: 12,
    fontWeight: '600',
  },
  container: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
  },
  flatListContainer: {
    margin: vh(10),
  },
  imageContainerStyle: {
    flexDirection: 'row',
    marginHorizontal: vw(10),
    marginTop: vh(10),
  },
  mentorReplyContainer: {
    marginHorizontal: vw(5),
  },
  replyContainer: {
    marginVertical: vh(5),
  },
  selectedImageContainer: {
    alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around',
  },
  selectedImageStyle: {
    height: vh(82),
    width: vw(90),
  },
  selectedImageSubContainer: {
    flexDirection: 'row',
  },
  subContainer: {
    marginHorizontal: vw(10),
  },
  tagListStyle: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_04,
  },
});

export default styles;
