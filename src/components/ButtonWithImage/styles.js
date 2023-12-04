import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { vh } from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

const styles = StyleSheet.create({
  bookMarkImage: {
    height: vh(19),
    width: vh(19),
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: ColorTheme.GREEN_BG,
    borderRadius: 6,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    minWidth: 101,
    paddingHorizontal: 5,
  },
  buttonImageStyle: {
    height: 20,
    width: 20,
  },
  buttonTitleTextStyle: {
    color: ColorTheme.light01,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 6,
  },
});

export default styles;
