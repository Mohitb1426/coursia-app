import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';

const styles = StyleSheet.create({
  buttonText: {
    color: ColorTheme.WHITE,
    fontSize: vw(16),
  },
  container: {
    alignItems: 'center',
    borderRadius: vw(12),
    elevation: 6,
    height: vh(48),
    justifyContent: 'center',
    marginBottom: 3,
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: vw(12),
    width: vw(291),
  },
  imageContainer: {
    alignItems: 'center',
    height: vh(48),
    justifyContent: 'center',
    width: vw(48),
  },
  imageStyle: {
    height: '40%',
    marginLeft: 15,
    width: '40%',
  },
  // eslint-disable-next-line react-native/no-color-literals
  iosContainer: {
    alignItems: 'center',
    borderColor: 'rgba(213,218,222, 1)',
    borderRadius: vw(12),
    borderWidth: 0.2,
    elevation: 3,
    height: vh(48),
    justifyContent: 'center',
    marginBottom: 3,
    shadowColor: 'rgba(213,218,222, 1)',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    width: vw(291),
  },
  mainViewStyle: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default styles;
