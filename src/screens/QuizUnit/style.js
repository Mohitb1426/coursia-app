import { StyleSheet, Dimensions } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

const { width } = Dimensions.get('window');

const styles = (AppTheme) => StyleSheet.create({
  backButton: {
    alignItems: 'center',
    height: vw(40),
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    width: vw(50),
  },
  cardContainer: {
    alignSelf: 'flex-end',
    height: vh(110),
    paddingRight: vh(8),
    width: width * 0.91,
  },
  container: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
  },
  firstStyle: {
    flexGrow: 1, left: width * 0.06,
  },
  flatListContainer: {
    marginBottom: vh(10),
  },
  headerText: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.INTER_SEMI_BOLD,
    fontSize: vh(18),
    fontStyle: 'normal',
    fontWeight: '500',
    marginHorizontal: vw(50),
  },
  headerView: {
    alignItems: 'center',
    flexDirection: 'row',
    height: vh(60),
    width: '100%',
  },
  header_backButton: {
    height: vh(24),
    width: vw(24),
  },
  moduleColor: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
  },
  nextContainer: {
    borderColor: ColorTheme.LIGHT_WHISPER_COLOR,
    borderRadius: 8,
    borderWidth: vh(1),
    height: vh(110),
    marginLeft: vh(10),
    marginVertical: vh(15),
    paddingHorizontal: vh(15),
    paddingTop: vh(20),
    width: '88%',
  },
  scrollViewContainer: {
    alignItems: 'center',
    flex: 1,
  },
  secondStyle: {
    flexGrow: 1,
    right: width * 0.04,
  },
  thirdStyle: {
    flexGrow: 1,
  },
});

export default styles;
