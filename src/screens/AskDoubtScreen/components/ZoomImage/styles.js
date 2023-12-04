import { StyleSheet } from 'react-native';
import { vh, vw, screenWidthDefault } from '../../../../common/Dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  removeImageStyle: {
    height: vh(30),
    width: vh(30),
  },
  selectedImageStyle: {
    borderRadius: 6,
    height: vw(82),
    width: vw(82),
  },
  subContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  webStyle: { width: screenWidthDefault },
  zoomSelectedImageStyle: {
    height: '90%',
    width: '90%',
  },
});

export default styles;
