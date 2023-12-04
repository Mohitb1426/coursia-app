import { StyleSheet } from 'react-native';
import { vh } from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  bottomString: {
    bottom: 0,
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontSize: 11,
    fontWeight: '600',
    position: 'absolute',
  },
  bottomStringContainer: {
    marginHorizontal: vh(10),
    marginTop: vh(30),
  },
  container: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_10,
    flex: 1,
    padding: vh(8),
  },
  continueWatchingAdditionalStyle: {
    marginVertical: '2%',
  },
  courseContainer: { flex: 1 },
  courseListContainer: {
    flex: 1,
    margin: 5,
  },
  courseListSubContainer: {
    marginTop: vh(5),
  },
  dividerHeader: {
    backgroundColor: AppTheme.DIVIDER_COLOR_01,
    height: 1,
  },
  headerText: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.INTER_MEDIUM,
    fontSize: vh(18),
    lineHeight: vh(41),
  },
  headerView: {
    alignItems: 'center',
    flexDirection: 'row',
    height: vh(60),
    justifyContent: 'center',
    width: '100%',
  },
  listContainer: {
    marginLeft: 5,
  },
  myCoursesTextStyle: {
    marginTop: '3%',
  },
  textContainer: {
    flex: 0.05,
  },
  textStyle: {
    color: AppTheme.TEXT_COLOR_CONTENT_01,
    fontFamily: Fonts.INTER_LIGHT,
    fontSize: vh(12),
    marginBottom: 6,
  },
});

export default styles;
