import { StyleSheet } from 'react-native';
import { vh, vw } from '../../../../common/Dimensions';

const styles = StyleSheet.create({
  floatingMenuButtonStyle: {
    alignSelf: 'flex-end',
    bottom: vh(35),
    position: 'absolute',
    right: vw(10),
  },
  imageStyle: {
    height: vh(60),
    width: vh(60),
  },
});

export default styles;
