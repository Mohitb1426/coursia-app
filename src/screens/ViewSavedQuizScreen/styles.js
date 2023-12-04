import { Dimensions, StyleSheet } from 'react-native';
import { screenWidthDefault } from '../../common/Dimensions';

const screenHeight = Dimensions.get('window').height - 50;
const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  backgroundImage: {
    alignItems: 'center',
    height: screenHeight,
    justifyContent: 'center',
    width: screenWidth,
  },
  container: {
    flex: 1,
  },
  subContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  webStyle: {
    width: screenWidthDefault,
  },
});

export default styles;
