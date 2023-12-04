import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 1,
  },
  dotContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 8,
    justifyContent: 'center',
    width: '100%',
  },
  imageStyle: {
    borderRadius: 8,
    // borderWidth: 1,
    height: '100%',
    resizeMode: 'cover',
    width: '100%',
  },
  itemContainer: {
    borderRadius: 8,
    // borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
  },
  mainContainer: {
    // backgroundColor: ColorTheme.ERROR_RED,
    height: 214,
    // paddingTop: 10,
    // marginTop: 20,
    width: '100%',
  },
  slider: {
    // marginTop: '15@ms',
    overflow: 'visible', // for custom animations
  },
  sliderContentContainer: {
    // paddingHorizontal:15,
    // paddingVertical: '10@ms', // for custom animation
  },
});

export default styles;
