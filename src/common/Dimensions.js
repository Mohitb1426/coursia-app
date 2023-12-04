import { Dimensions, PixelRatio } from 'react-native';
import { ScreenDimensions } from './AppStyles';

export const screenWidthDefault = ScreenDimensions.width;
export const screenHeightDefault = ScreenDimensions.height;

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const DesignHeight = 812;
const DesignWidth = 375;
const { width: SCREEN_WIDTH } = Dimensions.get('window');
// It is based on the screen width of your design layouts e.g Height 600 x Width 375
const scale = SCREEN_WIDTH / 375;

export function normalize(size) {
  return PixelRatio.roundToNearestPixel(size * scale);
}

export const vw = (width) => {
  const percent = (width / DesignWidth) * 100;
  const elemWidth = parseFloat(`${percent}%`);
  return PixelRatio.roundToNearestPixel(screenWidth * (elemWidth / 100));
};

export const vh = (height) => {
  // Parse string percentage input and convert it to number.
  const percent = (height / DesignHeight) * 100;
  const elemHeight = parseFloat(`${percent}%`);
  return PixelRatio.roundToNearestPixel(screenHeight * (elemHeight / 100));
};
