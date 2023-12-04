import { Dimensions, StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh } from '../../../../common/Dimensions';

const styles = StyleSheet.create({
  activeIndicatorStyle: { flex: 1, justifyContent: 'center' },
  bottomButtonContainer: { alignSelf: 'flex-end' },
  bottomContainerStyle: { flex: 0.5, justifyContent: 'flex-end' },
  buttonContainerFullScreen: { alignItems: 'center', flex: 1, justifyContent: 'flex-end' },
  controllerContainer: {
    height: vh(253),
    width: '100%',
  },
  controllerHeight: { height: Dimensions.get('screen').height, width: '100%' },
  fullScreenContainer: {
    height: '20%',
    justifyContent: 'flex-end',
    width: '100%',
  },
  fullScreenSlider: {
    height: '22%',
    // justifyContent: 'flex-end',
    paddingTop: 85,
    width: '100%',
  },
  heightFull: {
    height: '100%',
  },
  imageContainer: { height: vh(40), width: vh(40) },
  imageContainerButton: { height: vh(18.75), width: vh(17.25) },
  insideController: { flexDirection: 'row', justifyContent: 'space-around' },
  mainContainerStyle: { flex: 1 },
  mainVideoContainer: {
    backgroundColor: ColorTheme.APPLE_BLACK,
    height: vh(253),
    width: '100%',
  },
  sliderContainer: {
    height: 4,
    width: '100%',
  },
  sliderStyle: { marginHorizontal: -15 },
  subController: { flex: 1 },
  videoOrientationChange: {
    height: Dimensions.get('screen').width - 30,
    width: '100%',
  },
});

export default styles;
