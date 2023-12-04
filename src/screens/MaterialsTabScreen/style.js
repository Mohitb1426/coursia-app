import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { vw } from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  activityContainer: { paddingVertical: 20 },
  courseHeader: {
    marginHorizontal: 10,
  },
  dividerStyle: {
    backgroundColor: AppTheme.DIVIDER_COLOR_01,
    height: 1,
    width: '100%',
  },
  filterIcon: {
    alignItems: 'center',
    backgroundColor: ColorTheme.green06,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  filterText: {
    color: ColorTheme.WHITE,
    marginLeft: 10,
  },
  flatListStyle: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 15,
  },
  headingText: {
    alignSelf: 'flex-start',
    color: ColorTheme.BLACK_1,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(18),
    fontWeight: '700',
  },
  imageContainer: {
    alignItems: 'center',
  },
  imageStyle: {
  },
  mainContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
  },
  subContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 12,
  },
  subHeadingText: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(14),
    fontWeight: '700',
  },
});

export default styles;
