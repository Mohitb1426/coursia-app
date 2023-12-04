import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = StyleSheet.create({
  Card_Container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: vh(20),
  },
  cardStyles: {
    backgroundColor: ColorTheme.BLUE_58,
    borderRadius: 10,
    elevation: 5,
    height: '100%',
    overflow: 'hidden',
    padding: 1,
    width: '100%',
  },
  mainContainer: {
    backgroundColor: ColorTheme.TRANSPARENT,
    borderRadius: 8,
    flex: 1,
  },
  title: {
    color: ColorTheme.WHITE,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(20),
    textAlign: 'center',
  },

});

export default styles;
