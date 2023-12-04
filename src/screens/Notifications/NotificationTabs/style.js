import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../common/AppStyles';
import { vh, vw } from '../../../common/Dimensions';
import Fonts from '../../../common/Fonts';

const styles = StyleSheet.create({
  activeTabTextColor: {
    color: ColorTheme.GREEN_BG,
    fontSize: vw(14),
  },
  inactiveTabTextColor: {
    color: ColorTheme.GREY_TEXT,
    fontSize: vw(14),
  },
  mainContainer: {
    alignSelf: 'center',
    borderBottomColor: ColorTheme.BORDER_GREY,
    borderBottomWidth: 0.5,
    flex: 0.06,
    flexDirection: 'row',
    padding: vh(0),
    shadowOffset: { width: 0, height: 1 },
  },
  selectedTabStyle: {
    alignItems: 'center',
    borderBottomColor: ColorTheme.GREEN_BG,
    borderBottomWidth: vh(2),
    flex: 1,
    justifyContent: 'center',
  },
  tabStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(14),
    fontWeight: 'bold',
  },
});

export default styles;
