import { StyleSheet } from 'react-native';
import { vh } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  downloadButtonContainer: {
    height: '100%',
  },
  downloadButtonSubContainer: {
    alignItems: 'center',
    flex: 0.8,
    justifyContent: 'space-around',
    // marginTop: '11%',
  },
  imageContainer: {
    height: vh(40),
    width: vh(40),
  },
  imageStyle: {
    height: vh(20),
    width: vh(20),
  },
  mainContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
    justifyContent: 'center',
  },
  subContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textStyle: {
    color: AppTheme.TEXT_COLOR_CONTENT_04,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(12),
    marginTop: vh(10),
  },
  textViewStyle: {
    alignItems: 'center',
    flex: 0.8,
    justifyContent: 'space-between',
  },
});

export default styles;
