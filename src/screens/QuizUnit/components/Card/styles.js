import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    justifyContent: 'space-between',
    padding: vh(20),
  },
  cardStyles: {
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
  timerImage: {
    height: vh(58),
    width: vh(58),
  },
  title: {
    color: ColorTheme.WHITE,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(20),
    fontWeight: '600',
    height: vh(60),
    lineHeight: 30,
    textAlign: 'center',
  },
});

export default styles;
