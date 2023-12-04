import { StyleSheet } from 'react-native';
import { vh, vw } from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  activityIndicator: {
    alignItems: 'center',
    marginTop: vh(10),
  },
  answerCardContainer: {
    borderColor: AppTheme.ASK_DOUBT_BORDER_COLOR_02,
    borderTopColor: AppTheme.BORDER_COLOR,
    borderWidth: 2,
    flex: 1,
    marginVertical: vh(15),
    paddingTop: vh(20),
  },
  imageContainer: {
    marginRight: vw(2),
  },
  imageStyle: {
    height: vh(40),
    width: vw(40),
  },
  mainContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
  },
  notFound: {
    color: AppTheme.TEXT_COLOR_HEADING,
    textAlign: 'center',
  },
  searchContainer: { flex: 1 },
  subContainer: {
    flex: 1,
  },
  textInputContainer: {
    flex: 1,

    justifyContent: 'center',
    marginHorizontal: vw(20),
  },
  textInputMainContainer: {
    flexDirection: 'row',
  },
  textInputStyle: {
    alignItems: 'center',
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    borderColor: AppTheme.ASK_DOUBT_CARD_BORDER_COLOR_01,
    borderRadius: 10,
    borderWidth: 2,
    color: AppTheme.ASK_DOUBT_COLOR_01,
    flexDirection: 'row',
    height: vh(55),
    justifyContent: 'space-between',
    paddingLeft: vw(10),
  },
  textStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.ROBOTO,
    fontSize: 14,
  },
});

export default styles;
