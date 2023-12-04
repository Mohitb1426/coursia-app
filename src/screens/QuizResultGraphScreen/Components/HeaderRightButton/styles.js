import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh, vw } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: ColorTheme.GREEN_BG,
    borderRadius: 6,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    width: 101,
  },
  buttonImageStyle: { height: 20, width: 20 },
  buttonTitleTextStyle: {
    color: ColorTheme.light01,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 6,
  },
  container: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
  },
  headerText: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.INTER_SEMI_BOLD,
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  mainHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    height: vh(60),
    justifyContent: 'space-between',
    paddingLeft: vw(5),
    paddingRight: vw(12),
    position: 'relative',
    width: '100%',
  },
  textContainer: { flex: 1 },
});

export default styles;
