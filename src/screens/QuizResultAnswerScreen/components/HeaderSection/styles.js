import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import Fonts from '../../../../common/Fonts';
import { vh, vw } from '../../../../common/Dimensions';

const styles = StyleSheet.create({
  clockImage: {
    height: vh(37),
    width: vh(37),
  },
  hamburgerImage: {
    height: vh(16),
    width: vw(24),
  },
  mainHeader: {
    alignItems: 'center',
    borderBottomColor: ColorTheme.GREY_BORDER,
    borderBottomWidth: vh(1),
    flexDirection: 'row',
    height: vh(60),
    justifyContent: 'space-between',
    paddingHorizontal: vh(13),
    width: '100%',
  },
  subContainer: {
    alignItems: 'flex-end',
    flex: 0.9,
  },
  timeContainer: { flex: 0.9, height: vh(40), justifyContent: 'flex-end' },
  timerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '35%',
  },
  timerText: {
    color: ColorTheme.NATIVE_LIGHT_GREY,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(16),
    fontWeight: '500',
    paddingLeft: vh(10),
  },
});

export default styles;
