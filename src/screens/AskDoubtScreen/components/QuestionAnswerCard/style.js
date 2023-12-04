import { StyleSheet } from 'react-native';
import Fonts from '../../../../common/Fonts';
import { vh, vw } from '../../../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  contentTextStyle: {
    color: AppTheme.TEXT_COLOR_CONTENT_01,
    fontSize: vw(14),
    paddingHorizontal: 16,
    paddingTop: 4,
  },
  deletedTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_03,
    fontFamily: Fonts.ROBOTO,
    fontSize: 10,
    fontWeight: '400',
  },
  deletedTicketStyle: {
    alignItems: 'center',
    backgroundColor: AppTheme.PRIMARY_RED_COLOR,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 6,
    height: vh(18),
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    top: 0,
    width: vh(51),
    zIndex: 1000,
  },
  flatListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageContainerStyle: {
    flexDirection: 'row',
    marginBottom: vh(10),
  },
  imageStyle: {
    height: vh(16),
    width: vw(16),
  },
  inputContainer: {
    borderColor: AppTheme.ASK_DOUBT_BORDER_COLOR_02,
    // borderTopColor: ColorTheme.PHILIPPINE_SILVER,
    borderWidth: 0.5,
    flex: 0.3,
    justifyContent: 'center',
    marginHorizontal: 16,
    paddingVertical: 10,
  },
  mainContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    borderColor: AppTheme.ASK_DOUBT_CARD_BORDER_COLOR_01,
    borderRadius: 6,
    borderWidth: 1,
    flex: 0.4,
    marginBottom: 10,
    marginHorizontal: vw(15),
  },
  notDeletedTicketStyle: {
    alignItems: 'center',
    backgroundColor: AppTheme.PRIMARY_RED_COLOR,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 6,
    height: vh(24),
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    top: 0,
    width: vh(24),
  },
  progressBarContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  questionContainerStyle: {
    flex: 0.2,
  },
  questionImageContainer: {
    // flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingTop: 4,
  },

});

export default styles;
