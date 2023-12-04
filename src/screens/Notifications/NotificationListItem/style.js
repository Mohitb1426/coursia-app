import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../common/AppStyles';
import { vh, vw, screenWidthDefault } from '../../../common/Dimensions';
import Fonts from '../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  animatedBoxStyle: {
    alignItems: 'center',
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
    flexDirection: 'row',
  },
  bodyTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontSize: vw(10),
    marginHorizontal: vw(5),
    marginTop: vh(17),
    paddingEnd: vw(25),
    width: screenWidthDefault,
  },

  dateTextStyle: {
    color: ColorTheme.GREY_LIGHT_TEXT,
    fontSize: vw(8),
    marginBottom: vh(9),
    marginHorizontal: vw(5),
    marginTop: vh(9),
  },
  readContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
    paddingHorizontal: vh(10),
  },
  titleTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(12),

    fontWeight: 'bold',
    marginHorizontal: vw(5),
    marginTop: vh(12),
  },
  unreadContainer: {
    backgroundColor: AppTheme.NOTIFICATION_CONTAINER_01,
    paddingHorizontal: vh(10),
  },
});

export default styles;
